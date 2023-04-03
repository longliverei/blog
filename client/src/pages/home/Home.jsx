import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import Pearl from "../../assets/pearl.jpg";

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [recents, setRecents] = useState([]);

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

        const fetchRecent = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/recents`);
                setRecents(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchRecent();
    }, [cat]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }

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
            <div className="latest">
                <h2>Latest posts</h2>
                <div className="recent-wrapper">
                {recents.map(recent => (
                    <div className="recent" key={recent.id}>
                        <Link className="link" to={`/post/${recent.id}`}>
                        <div className="recent-img">
                            <img src={`/src/upload/${recent.img}`} alt="" />
                        </div>
                        <div className="recent-title">
                            <h3>{recent.title}</h3>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
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
                        <img src={`/src/upload/${post.img}`} alt="" />
                    </div>
                    <div className="post-text">
                        <h1>{post.title}</h1>
                        <p className="text">{getText(post.desc)}</p>
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
