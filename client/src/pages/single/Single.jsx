import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from '../../components/menu/Menu';
import { AuthContext } from '../../context/authContext';
import './styles.scss';
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";

export const Single = () => {
    const [post, setPost] = useState([]);
    const { currentUser } = useContext(AuthContext);

    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    const navigate = useNavigate();

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

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/posts/${postId}`, { withCredentials: true });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='single'>
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    {post.userImg && <img  className="user-img" src={post.userimg} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>{post.mydate}</p>
                    </div>
                    {currentUser ? currentUser.username == post.username && <div className="edit">
                        <Link to={`/write?edit=2`}>
                        <img className="icon" alt="edit icon" src={Edit} />
                        </Link>
                        <img src={Delete} alt="delete icon" className="icon" onClick={handleDelete} />
                    </div> : null}
                </div>
                    <div className="post-content">
                        <h1>{post.title}</h1>
                        <p className="post-text">{post.desc}</p>
                    </div>
            </div>
            <Menu cat={post.cat} />
        </div>
    )
}