import { catchAsyncError } from "../../middlewares/catchAsyncError.js";

export const adminRegisterPage = catchAsyncError(async (req, res, next) => {
    return res.render("admin/auth/register");
});

export const adminLoginPage = catchAsyncError(async (req, res, next) => {
    return res.render("admin/auth/login");
});