import React, { useState } from 'react'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import './post.css'

const Post = () => {
    const [count, setCount] = useState(139);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedComments = [
            ...comments,
            comment
        ];
        setComments(updatedComments);
        setComment("");
    }

    let arr = comments.map((com) => {
        return (
            <div className='arrayItem'>{com}</div>
        );
    })
    return (
        <>
            <div className="container">
                <div>
                    <span className="postTitle">Squidward Tentacles</span>
                </div>
                <img src="https://i2-prod.mirror.co.uk/gaming/article30833471.ece/ALTERNATES/s1200c/0_squid.png" alt="" className="postImg" />
                <span className='like'><FontAwesomeIcon icon={faHeart} onClick={() => {setCount(count + 1)}} />{count}</span>
                <form className='comments' onSubmit={handleSubmit}>
                <input type="text" value={comment} onChange={(e) => {setComment(e.target.value)}}/>
                <button>Save</button>
                </form>
                <div className='arrayItems'>{arr}</div>
            </div>
        </>
        
    )
}

export default Post