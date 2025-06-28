import { Router } from "express";
import signUpRoutes from "./api/signUp";
import Product from "./api/product";
import categoryRoutes from "./api/category";
const router = Router();

router.use("/api", signUpRoutes);
router.use("/api", Product);
router.use("/api", categoryRoutes);
export default router;
