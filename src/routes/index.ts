import { Router } from "express";
import signUpRoutes from "./api/signUp";
import Product from "./api/product";
const router = Router();

router.use("/api", signUpRoutes);
router.use("/api", Product);
export default router;
