import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import './styles.scss';

export const Menu = () => {
   const [posts, setPosts] = useState([]);

   const location = useLocation();
   const postId = location.pathname.split("/")[2];

   useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/posts/`);
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
   }, []);

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt='' />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}