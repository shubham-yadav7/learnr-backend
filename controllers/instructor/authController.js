import { catchAsyncError } from "../../middlewares/catchAsyncError.js";

export const instructorRegisterPage = catchAsyncError(async (req, res, next) => {
    return res.render("instructor/auth/register");
});

export const instructorLoginPage = catchAsyncError(async (req, res, next) => {
    return res.render("instructor/auth/login");
});

export const instructorForgotPasswordPage = catchAsyncError(async (req, res, next) => {
    return res.render("instructor/auth/forgot-password");
});

