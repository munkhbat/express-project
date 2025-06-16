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

router.put("/products-update", async (req, res) => {
  try {
    const message = await ProductController.updateProduct(req.body);
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/product-delete", async (req, res) => {
  try {
    const message = await ProductController.deleteProducts(req.body);
    res.json({ message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
