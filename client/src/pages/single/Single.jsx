import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';
import { AuthContext } from '../../context/authContext';
import './styles.scss';

export const Single = () => {
    const [post, setPost] = useState([]);
    const { currentUser } = useContext(AuthContext);

    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [postId]);

    return (
        <div className='single'>
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    {post.userImg && <img src={post.userimg} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>{post.mydate}</p>
                    </div>
                    {currentUser ? currentUser.username == post.username && <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <p>EDIT</p>
                        </Link>
                        <p>DEL</p>
                    </div> : null }
                </div>
                    <div className="post-content">
                        <h2>{post.title}</h2>
                        <p>{post.desc}</p>
                    </div>
            </div>
            <Menu />
        </div>
    )
}