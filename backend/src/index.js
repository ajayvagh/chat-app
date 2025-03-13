import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js"

import authRoutes from "./routes/auth.route.js";

dotenv.config()
 const app = express();

 const PORT = process.env.PORT;

app.use(express.json());      // allows extract data from json body

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
   console.log("server running on PORT: "+ PORT);
   connectDB()
})