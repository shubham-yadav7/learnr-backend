import express from "express";
import { instructorLoginPage } from "../controllers/instructor/authController.js";
import { authorizedInstructor } from "../middlewares/accessAuth.js";

const router = express.Router();

router.route("/").get(authorizedInstructor, instructorLoginPage);

export default router;
