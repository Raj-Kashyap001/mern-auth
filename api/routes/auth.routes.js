import express from "express";
import {
  handleSignIn,
  handleSignUp,
  handleGoogleAuth,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", handleSignUp);
router.post("/signin", handleSignIn);
router.post("/google", handleGoogleAuth);
export default router;
