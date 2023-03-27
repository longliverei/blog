import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './styles.scss';

export const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/posts/");
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            <div className="home-container">
                <div className="posts">
                    {posts.map(post =>(
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt='image' />
                            </div>
                            <div className="content">
                                <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                </Link>
                                <p>{post.desc}</p>
                                <Link className='link' to={`/post/${post.id}`}>
                                <button>Read more</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
