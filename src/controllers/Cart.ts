import sequelize from "sequelize";
import { CartItemModel, CartModel, Database } from "../db";

export default class CartController {
  static async createCart(doc: any): Promise<string> {
    const t = await Database.transaction();

    try {
      const cart = await CartModel.create(
        { user_id: doc.user_id },
        { transaction: t }
      );

      if (doc.items && Array.isArray(doc.items)) {
        const itemsToCreate = doc.items.map((item: any) => ({
          cart_id: cart.id,
          product_id: item.product_id,
          quantity: item.quantity,
        }));
        await CartItemModel.bulkCreate(itemsToCreate, { transaction: t });
      }

      await t.commit();
      return i18n.__("response.ok");
    } catch (err: any) {
      await t.rollback();
      throw new Error("failed" + err.message);
    }
  }
}
