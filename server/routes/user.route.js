import { Router } from "express";
import isAuth from "../middlerware/isAuth.js";
import { getCurrentUser } from "../controller/user.controller.js";

const route = Router();

route.get("/currentUser", isAuth,getCurrentUser);

const userRouter = route;
export default userRouter;