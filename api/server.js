import express from "express";
import * as dotenv from 'dotenv';
import db from './db.js';
import cors from 'cors';
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";
import multer from "multer";

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/src/upload")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+file.originalname)
    }
});
const upload = multer({ storage });

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
dotenv.config();

// ROUTES
app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
});
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);

db.connect(err => {
    if (err) throw err;
    console.log("DB OK.")
})

app.listen(8000, () => {
    console.log("Connected!");
});