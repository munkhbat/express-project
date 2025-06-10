import { Router } from "express";
import UserController from "../../controllers/User";

const router = Router()
router.post('/signup', async (req, res) => {
    console.log(req.body);
    
    try {
        const token = await UserController.singUp(req.body);
        res.json({ token });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/login', async(req,res)=>{
    console.log(req.body);

    try{
        const token = await UserController.login(req.body);
        res.json({token});
    }catch (error:any){
        res.status(500).json({message:error.message})
    }
    
})
export default router