import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/nextjs/server';
import db from '@/db';

export async function POST(request: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET_DELETE_ACCOUNT;

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

  if (evt.type === 'user.deleted') {
    const data = evt.data;

    try {
      await db.user.delete({ where: { clerkId: data.id } });
    } catch (error: any) {
      return NextResponse.json({ error, reason: error?.message });
    }
  }

  return NextResponse.json({ status: 204 });
}