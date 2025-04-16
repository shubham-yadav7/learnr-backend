import { catchAsyncError } from "../../middlewares/catchAsyncError.js";

export const instructorDashboardPage = catchAsyncError(async (req, res, next) => {
    return res.render("instructor/primary/index");
});