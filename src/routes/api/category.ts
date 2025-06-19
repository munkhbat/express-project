import { error } from "console";
import { Router } from "express";
import CategoryController from "../../controllers/Category";

const router = Router();

router.post("/category/create", async (req, res) => {
  try {
    const message = await CategoryController.createCategory(req.body);
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/category/update", async (req, res) => {
  try {
    const message = await CategoryController.updateCategory(req.body);
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/category/update", async (req, res) => {
  try {
    const message = await CategoryController.deleteCategories(req.body);
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
