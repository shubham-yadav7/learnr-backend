import { catchAsyncError } from "../../middlewares/catchAsyncError.js";

export const adminDashboardPage = catchAsyncError(async (req, res, next) => {
    return res.render("admin/primary/index");
});
