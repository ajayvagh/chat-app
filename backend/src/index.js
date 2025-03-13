import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import { connectDB } from "./lib/db.js"

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config()
 const app = express();

 const PORT = process.env.PORT;

app.use(express.json());      // allows extract data from json body
app.use(cookieParser());      // allow to parse cookie

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
   console.log("server running on PORT: "+ PORT);
   connectDB()
})