import { PaymentModel } from "../db";

export default class PaymentController {
  static async createPayment(data: any): Promise<string> {
    try {
      await PaymentModel.create({
        order_id: data.order_id,
        payment_method: data.payment_method,
        payment_status: data.payment_status,
        amount: data.amount,
        transaction_id: data.transaction_id,
      });
      return "Төлбөр амжилттай";
    } catch (err: any) {
      throw new Error("error");
    }
  }
}
