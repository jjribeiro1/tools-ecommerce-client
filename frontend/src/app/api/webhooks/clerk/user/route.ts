import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import db from '@/db';

export async function POST(request: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET_USER;
  if (!WEBHOOK_SECRET) {
    return NextResponse.json('missing clerk webhook secret', { status: 400 });
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json('missing svix headers', { status: 400 });
  }

  const payload = await request.json();
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(JSON.stringify(payload), {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return NextResponse.json({ message: 'Error verifying webhook', reason: err }, { status: 400 });
  }

  if (evt.type === 'user.created' || evt.type === 'user.updated') {
    const { id, first_name, last_name, email_addresses } = evt.data;
    console.log(id);

    try {
      await db.user.upsert({
        where: { externalId: id },
        create: {
          externalId: id as string,
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0].email_address,
        },
        update: {
          externalId: id,
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0].email_address,
        },
      });

      const status = evt.type === 'user.created' ? 201 : 200;
      const message = evt.type === 'user.created' ? 'Created' : 'Updated';
      return NextResponse.json({ message }, { status });
    } catch (error: any) {
      return NextResponse.json({ error, reason: error?.message });
    }
  }

  if (evt.type === 'user.deleted') {
    const { id } = evt.data;
    console.log(id);

    try {
      await db.user.delete({ where: { externalId: id } });
      return new Response(null, { status: 204 });
    } catch (error: any) {
      return NextResponse.json({ error, reason: error?.message });
    }
  }

  return NextResponse.json({ message: 'Invalid event' }, { status: 400 });
}
