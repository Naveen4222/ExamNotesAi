import {Router} from "express";
import isAuth from "../middlerware/isAuth.js";
import { pdfDownload } from "../controller/pdf_controller.js";


const router = Router();

router.post("/generate-pdf", isAuth,pdfDownload);

const pdfRouter = router;

export default pdfRouter