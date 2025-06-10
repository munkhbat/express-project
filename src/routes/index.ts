import { Router } from "express";
import signUpRoutes from './api/signUp'
const router = Router()

router.use('/api',signUpRoutes)

export default router