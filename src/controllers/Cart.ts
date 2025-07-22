import { CartModel } from "../db";

export default class CartController {
  static async createCart(doc: any): Promise<string> {
    const cart = CartModel.create({ ...doc });
    return i18n.__("response.ok");
  }
}
