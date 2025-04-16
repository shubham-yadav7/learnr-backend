import express from "express";
import { authorizedAdmin } from "../../../middlewares/accessAuth.js";
import { adminDashboardPage } from "../../../controllers/admin/primaryController.js";

const router = express.Router();

router.route("/").get(authorizedAdmin, adminDashboardPage);

export default router;
