import express from "express";
import * as dotenv from 'dotenv';
import db from './db.js';
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

const app = express();

app.use(express.json());
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
    console.log("Connected!")
});