import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';
import './styles.scss';

export const Single = () => {
    const [posts, setPosts] = useState([]);

    const location = useLocation();
    const postId = location.pathname.split("/")(2);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [postId]);

    return (
        <div className='single'>
            {posts.map(post => (
                <div className="content">
                    <img src={post.img} alt="" />
                    <div className="user">
                        <img src={post.img} alt="" />
                        <div className="info">
                            <span>JOHN</span>
                            <p>Posted 2 days ago</p>
                        </div>
                        <div className="edit">
                            <Link to={`/write?edit=2`}>
                            <p>EDIT</p>
                            </Link>
                            <p>DEL</p>
                        </div>
                    </div>
                        <div className="post-content">
                            <h2>{post.title}</h2>
                            <p>{post.desc}</p>
                        </div>
                </div>
            ))}
            <Menu />
        </div>
    )
}