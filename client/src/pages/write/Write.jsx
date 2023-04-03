import React, { useState } from "react";
import './styles.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("http://localhost:8000/api/upload", formData, { withCredentials: true });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            state ? await axios.put(`http://localhost:8000/api/posts/${state.id}`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : ""
            })
            : await axios.post(`http://localhost:8000/api/posts/`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : ""
            }, { withCredentials: true })
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="add">
            <div className="content">
                <input type="text" value={title} placeholder="Title" onChange={ e => setTitle(e.target.value)} />
                <div className="editor-container">
                    <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu-write">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input style={{display: 'none'}} type="file" name='' id='file' onChange={ e => setFile(e.target.files[0])} />
                    <label className='file' htmlFor='file'>Upload Image</label>
                    <div className="buttons">
                        <button onClick={handleSubmit}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className='cat'>
                        <input type="radio" checked={cat == "movies"} name="cat" id="movies" value="movies" onChange={ e => setCat(e.target.value)} />
                        <label htmlFor="movies">Movies</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" checked={cat == "art"} name="cat" id="art" value="art" onChange={ e => setCat(e.target.value)} />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className='cat'>
                        <input type="radio" checked={cat == "literature"} name="cat" id="literature" value="literature" onChange={ e => setCat(e.target.value)} />
                        <label htmlFor="literature">Literature</label>
                    </div>
                </div>
            </div>
        </div>
    )
}