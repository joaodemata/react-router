import React from "react";
import { useParams, useNavigate} from "react-router-dom"
import {blogdata} from './blog_data'

const BlogPost = () => {
    const navigate = useNavigate();
    const {slug} = useParams();
    const blogpost = blogdata.find(_post => _post.slug === slug)
    const returnToBlog= () => {
        navigate('/blog')
        // navigate(-1)
     };
    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    )
}

export {BlogPost}