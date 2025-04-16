import express from "express";
import { authorizedAdmin } from "../../../middlewares/accessAuth.js";
import { adminRegisterPage, adminLoginPage } from "../../../controllers/admin/authController.js";

const router = express.Router();

router.route("/").get(authorizedAdmin, adminLoginPage);
router.route("/register").get(adminRegisterPage);
router.route("/login").get(adminLoginPage);

export default router;
