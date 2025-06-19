import { CategoryModel } from "../db";

export default class CategoryController {
  static async createCategory(doc: any): Promise<string> {
    try {
      const category = await CategoryModel.create({ ...doc });
      return category.id;
    } catch (error: any) {
      console.error(
        "[CategoryController] createCategory error:",
        error.message
      );
      throw new Error("Category үүсгэхэд алдаа гарлаа.");
    }
  }

  static async deleteCategories(docs: any[]): Promise<string> {
    try {
      const deletedCount = await CategoryModel.destroy({
        where: { id: docs.map((d) => d.id) },
      });

      if (deletedCount === 0) {
        return "Устгах category олдсонгүй.";
      }

      return `${deletedCount} category амжилттай устгагдлаа.`;
    } catch (error: any) {
      console.error(
        "[CategoryController] deleteCategories error:",
        error.message
      );
      throw new Error("Category устгах үед алдаа гарлаа.");
    }
  }

  static async updateCategory(doc: any): Promise<string> {
    try {
      const { id, ...updateData } = doc;
      const [updatedRows] = await CategoryModel.update(updateData, {
        where: { id },
      });

      if (updatedRows === 0) {
        return "Шинэчлэх category олдсонгүй.";
      }

      return "Category амжилттай шинэчлэгдлээ.";
    } catch (error: any) {
      console.error(
        "[CategoryController] updateCategory error:",
        error.message
      );
      throw new Error("Category шинэчлэх үед алдаа гарлаа.");
    }
  }

  static async getCategories(): Promise<object[]> {
    try {
      const categories = await CategoryModel.findAll();
      return categories;
    } catch (error: any) {
      console.error("[CategoryController] getCategories error:", error.message);
      throw new Error("Category жагсаалт авах үед алдаа гарлаа.");
    }
  }
}
