import { Router } from "express";
import { register } from "../controller/user_controller.js";



const router = Router();

router.post("/register",register);

const userRoute = router;

export default userRoute;