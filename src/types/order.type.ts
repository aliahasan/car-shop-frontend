/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IOrderVerify {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export type TOrderType = {
  cars: {
    car: {
      images: string[];
      name: string;
      _id: string;
    };
    quantity: number;
    _id: string;
  }[];
  createdAt: string;
  deliveryStatus: string;
  orderStatus: string;
  paymentStatus: string;
  totalPrice: number;
  transaction: {
    bank_status: string;
    date_time: string;
    id: string;
    method: string;
    sp_code: string;
    sp_message: string;
    transactionStatus: any;
  };
  updatedAt: string;
  user: {
    email: string;
    name: string;
    _id: string;
  };
  __v: number;
  _id: string;
};
