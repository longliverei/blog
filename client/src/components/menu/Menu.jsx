import axios from "axios";
import React, { useEffect, useState } from "react";
import './styles.scss';
import { Link } from "react-router-dom";

export const Menu = ({cat}) => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/posts/?cat=${cat}`);
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
   }, [cat]);

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`/src/upload/${post.img}`} alt='' />
                    <h2>{post.title}</h2>
                    <Link className="link" to={`/post/${post.id}`}>
                    <button>Read More</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}