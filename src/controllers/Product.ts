import { error } from "console";
import { sign } from "crypto";
import { ICreateProduct } from "../utils/interfaces/product";
import { ProductModel } from "../db";
export default class ProductController {
  static async createProduct(doc: ICreateProduct): Promise<string> {
    try {
      const product = await ProductModel.create({
        ...doc,
      });
      return product.id;
    } catch (error: any) {
      console.log(error);
      throw new Error("failed");
    }
  }
}
