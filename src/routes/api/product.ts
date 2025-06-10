import { error } from "console";
import { Router } from "express";
import ProductController from "../../controllers/Product";

const router = Router();
router.post("/products", async (req, res) => {
  try {
    const message = await ProductController.createProduct(req.body);
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
