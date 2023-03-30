import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import Pearl from "../../assets/pearl.jpg";

export const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

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
                    Write about movies, art and literature.
                </p>
            </div>
            <div className="categories">
                <Link className="link" to="/?">
                <button>All</button>
                </Link>
                <Link className="link" to="/?cat=movies">
                <button>Movies</button>
                </Link>
                <Link className="link" to="/?cat=art">
                <button>Art</button>
                </Link>
                <Link className="link" to="/?cat=literature">
                <button>Literature</button>
                </Link>
            </div>
            <div className="posts-wrapper">
                {posts.map(post => (
                <div className="posts" key={post.id}>
                    <div className="post-img">
                        <img src={post.img} alt="" />
                    </div>
                    <div className="post-text">
                        <h1>{post.title}</h1>
                        <p>{post.desc}</p>
                        <Link className="link" to={`/post/${post.id}`}>
                        <button>Read More</button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
