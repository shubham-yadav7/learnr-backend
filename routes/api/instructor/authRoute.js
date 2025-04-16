import express from "express";
import { authorizedInstructor } from "../../../middlewares/accessAuth.js";
import { instructorRegisterPage, instructorLoginPage, instructorForgotPasswordPage } from "../../../controllers/instructor/authController.js";

const router = express.Router();

router.route("/").get(authorizedInstructor, instructorLoginPage);
router.route("/register").get(instructorRegisterPage);
router.route("/login").get(instructorLoginPage);
router.route("/forgot-password").get(instructorForgotPasswordPage);

export default router;
