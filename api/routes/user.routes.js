import { Router } from "express";
import handleUserGet from "../controllers/user.controller.js";

const router = Router();

router.get("/api/user", handleUserGet);

export default router;
