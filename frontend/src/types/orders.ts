export interface Orders {
  id: string;
  isPaid: boolean;
  address: string;
  orderItems: OrderItem[];
  externalUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface OrderItem {
  price: number;
  quantity: number;
  productName: string;
  productExternalId: string;
}
