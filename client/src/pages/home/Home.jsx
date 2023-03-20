import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';

export const Home = () => {
    const posts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?',
            img: 'https://culturainglesacuritiba.com.br/wp-content/uploads/2020/09/outono-na-inglaterra.png'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?',
            img: 'https://culturainglesacuritiba.com.br/wp-content/uploads/2020/09/outono-na-inglaterra.png'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?',
            img: 'https://culturainglesacuritiba.com.br/wp-content/uploads/2020/09/outono-na-inglaterra.png'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet.',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem?',
            img: 'https://culturainglesacuritiba.com.br/wp-content/uploads/2020/09/outono-na-inglaterra.png'
        }
    ]

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
                                <button>Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
