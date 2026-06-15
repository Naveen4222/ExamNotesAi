import {Router} from "express";
import { generateNotes } from "../controller/generate_controller.js";
import isAuth from "../middlerware/isAuth.js";
const router = Router();

router.post("/generate-note", isAuth, generateNotes,)

const notesRouter = router;

export default notesRouter;