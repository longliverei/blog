import React from "react";
import './styles.scss';

export const Menu = () => {
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