import { Router } from "express";
import handleUserGet from "../controllers/user.controller.js";

const router = Router();

router.get("/", handleUserGet);

export default router;
