import {Router} from "express";
import { goggleAuth, logOut } from "../controller/auth.controller.js";

const route = Router();

route.post("/google", goggleAuth);
route.get("/logout", logOut)

const GoogleAuth = route;

export default GoogleAuth;