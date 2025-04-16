import express from "express";
import { authorizedInstructor } from "../../../middlewares/accessAuth.js";
import { instructorDashboardPage } from "../../../controllers/instructor/primaryController.js";
const router = express.Router();

router.route("/").get(instructorDashboardPage);

export default router;
