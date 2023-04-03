import jwt from "jsonwebtoken";
import db from "../db.js";

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat = ? ORDER BY date DESC" : "SELECT * FROM posts ORDER BY date DESC LIMIT 18446744073709551615 OFFSET 3";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const getRecents = (req, res) => {
    const q = "SELECT * FROM posts ORDER BY date DESC LIMIT 3";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getPost = (req, res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, `userimg`, `cat`, date_format(date, '%Y-%m-%d') as mydate FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data[0]);
    })
};

export const addPost = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated.");

    jwt.verify(token, "jwt-key", (err, userInfo) => {
        if (err) return res.status(403).json("Token not valid.");

        const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `uid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            userInfo.id
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);

            return res.json("Post has been created.")
        });
    });
};

export const deletePost = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated.");

    jwt.verify(token, "jwt-key", (err, userInfo) => {
        if (err) return res.status(403).json("Token not valid.");

        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("It doesn't belong you.");

            return res.json("Post has been deleted.");
        });
    });
};

export const updatePost = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated.");

    jwt.verify(token, "jwt-key", (err, userInfo) => {
        if (err) return res.status(403).json("Token not valid.");

        const postId = req.params.id;
        const q = "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ?, `cat` = ? WHERE `id` = ? and `uid` = ?";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat
        ]

        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);

            return res.json("Post has been updated.")
        });
    });
};