import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler.js";

export const authorizedInstructor = (req, res, next) => {
    if (req.user && req.user.type === "instructor") {
        return next();
    }
    req.flash("error", "Please authenticate yourself first!");
    return res.redirect("/instructor/auth/login");
};

export const authorizedAdmin = (req, res, next) => {
    if (req.user && req.user.type === "admin") {
        return next();
    }
    req.flash("error", "Please authenticate yourself first!");
    return res.redirect("/admin/auth/login");
};