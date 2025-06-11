import { error } from "console";
import { sign } from "crypto";
import {
  ICreateProduct,
  IDeleteProducts,
  IUpdateProduct,
} from "../utils/interfaces/product";
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

  static async deleteProducts(docs: IDeleteProducts[]): Promise<string> {
    try {
      const deletedCount = await ProductModel.destroy({
        where: {
          doc: docs,
        },
      });

      if (deletedCount === 0) {
        return "No products found to delete";
      }

      return `${deletedCount} products deleted successfully`;
    } catch (error: any) {
      throw new Error(
        error.message || "Something went wrong while deleting products"
      );
    }
  }

  static async updateProduct(doc: IUpdateProduct): Promise<string> {
    try {
      const { id, ...updateData } = doc;

      const [updatedRows] = await ProductModel.update(updateData, {
        where: { id: id },
      });

      if (updatedRows === 0) {
        return "Product not found or nothing to update.";
      }

      return "Product updated successfully.";
    } catch (error: any) {
      console.error("Error updating product:", error);
      throw new Error("Failed to update product.");
    }
  }
}
