import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './styles.scss';
import Pearl from "../../assets/pearl.jpg";

export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/posts");
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const style = {
        backgroundImage: `url(${Pearl})`
    }

    return (
        <div className="home">
            <div className="thumbnail">
                <span className="image-cover" style={style} />
                <i className="shadow" />
                <p className="cover-text">
                    Express yourself. <br/>
                    Write about movies, art and culture.
                </p>
            </div>
            <div className="categories">
                <button>All</button>
                <button>Movies</button>
                <button>Art</button>
                <button>Literature</button>
                <button>Reviews</button>
            </div>
            <div className="posts-wrapper">
                {posts.map(post => (
                <div className="posts" key={post.id}>
                    <div className="post-img">
                        <img src={post.img} alt="" />
                    </div>
                    <div className="post-text">
                        <h3>{post.title}</h3>
                        <p>{post.desc}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
