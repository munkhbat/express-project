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
      const product = await ProductModel.create({ ...doc });
      return product.id;
    } catch (error: any) {
      console.error("Error creating product:", error);

      if (error.name === "SequelizeValidationError") {
        throw new Error("Invalid product data.");
      }

      throw new Error("Failed to create product.");
    }
  }

  static async deleteProducts(docs: IDeleteProducts[]): Promise<string> {
    try {
      const deletedCount = await ProductModel.destroy({
        where: { id: docs.map((d) => d.id) }, // зассан хэсэг
      });

      if (deletedCount === 0) {
        return "No products found to delete.";
      }

      return `${deletedCount} products deleted successfully.`;
    } catch (error: any) {
      console.error("Error deleting products:", error);
      throw new Error(error.message || "Failed to delete products.");
    }
  }

  static async updateProduct(doc: IUpdateProduct): Promise<string> {
    try {
      const { id, ...updateData } = doc;

      const [updatedRows] = await ProductModel.update(updateData, {
        where: { id },
      });

      if (updatedRows === 0) {
        return "Product not found or nothing to update.";
      }

      return "Product updated successfully.";
    } catch (error: any) {
      console.error("Error updating product:", error);

      if (error.name === "SequelizeValidationError") {
        throw new Error("Invalid product update data.");
      }

      throw new Error("Failed to update product.");
    }
  }

  static async getProducts(): Promise<object> {
    try {
      const products = await ProductModel.findAll();
      return products;
    } catch (error: any) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products.");
    }
  }
}
