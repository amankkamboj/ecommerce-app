import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
//route object
const router = express.Router();

//Routing
//Register || Method Post
router.post("/register", registerController);
//Login || Method Post
router.post("/login", loginController);
export default router;
