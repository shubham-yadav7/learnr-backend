import express from "express";
import dotenv from "dotenv";
import path from "path";
import flash from "connect-flash";
import { fileURLToPath } from "url";
import cors from "cors";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import ErrorMiddleware from "./middlewares/Error.js";


dotenv.config({ path: "./config/config.env" })
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"))

app.use((req, res, next) => {
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.use(
    session({
        saveUninitialized: false,
        resave: false,
        key: process.env.KEY,
        secret: process.env.SECRET,
        secure: true,
        httpOnly: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            ttl: 7 * 24 * 60 * 60,
            autoRemove: "native",
            collectionName: "sessions",
            touchAfter: 12 * 3600,
        }),
        cookie: {
            maxAge: 50 * 365 * 24 * 60 * 60 * 1000,
        },
    })
);

// import authRoutes from "./routes/admin/authRoute.js"
// import adminPrimaryRoutes from "./routes/admin/primaryRoute.js"
// import adminProductRoutes from "./routes/admin/productRoute.js"
// import adminOrderRoutes from "./routes/admin/orderRoute.js"
// import adminCouponRoutes from "./routes/admin/couponRoute.js"
// import adminUsersRoutes from "./routes/admin/userRoute.js"
// import adminTransactionRoutes from "./routes/admin/transactionRoute.js"
// import adminSupportRoutes from "./routes/admin/supportRoute.js"

// @User Routes Imports
// import userAuthRoutes from "./routes/user/authRoute.js"

// app.use("/admin", adminPrimaryRoutes);
// app.use("/admin/auth", authRoutes);
// app.use("/admin/product", adminProductRoutes);
// app.use("/admin/order", adminOrderRoutes);
// app.use("/admin/coupon", adminCouponRoutes);
// app.use("/admin/users", adminUsersRoutes);
// app.use("/admin/transaction", adminTransactionRoutes);
// app.use("/admin/support", adminSupportRoutes);

// app.use("/api/auth", userAuthRoutes);


export default app;

app.use(ErrorMiddleware);