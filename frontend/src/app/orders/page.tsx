import React from 'react';
import db from '@/db';
import { auth } from '@clerk/nextjs';
import { Orders } from '@/types/orders';
import { dateFormatter } from '@/utils/date-formatter';

async function getOrdersFromUser(externalUserId: string) {
  const data = await db.order.findMany({ where: { externalUserId }, orderBy: { createdAt: 'desc' } });
  return data as unknown as Orders[];
}

export default async function Orders() {
  const { userId } = auth();
  const orders = await getOrdersFromUser(userId!);

  return (
    <section className="container my-0 mx-auto flex flex-col gap-8 py-10 px-4">
      <h1 className="text-xl sm:text-3xl font-semibold">Meus Pedidos</h1>

      <ul className="flex flex-col gap-4">
        {orders.map((order, i) => (
          <li key={order.id}>
            <div
              className={`flex flex-col gap-4 p-2 text-xs sm:text-base text-gray-100 rounded-lg ${
                order.isPaid ? 'bg-green-600' : 'bg-red-500/80'
              }`}
            >
              <div className="font-medium">
                <p>ID: {order.id}</p>
                <p>Data: {dateFormatter(order.createdAt)}</p>
                <p>Status: {order.isPaid ? 'Pagamento bem sucedido' : 'Pagamento não realizado'}</p>
              </div>

              <div className="flex flex-col">
                <em className="font-bold">Itens do Pedido:</em>

                <div className="flex flex-col gap-0.5">
                  {order.orderItems.map((item, i) => (
                    <span key={i} className="font-medium">{`${item.quantity}x ${item.productName}`}</span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
