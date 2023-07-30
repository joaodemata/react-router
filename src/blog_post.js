import React from "react";
import { useParams, useNavigate} from "react-router-dom"
import {blogdata} from './blog_data'
import { useAuth } from "./auth";

const BlogPost = () => {
    const navigate = useNavigate();
    const {slug} = useParams();

    const auth = useAuth()

    const blogpost = blogdata.find(_post => _post.slug === slug)

    const canDelete = auth.user?.privileges.isAdmin || blogpost.author === auth.user?.username

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

            {canDelete && (<button>Eliminar blogspot</button>)}
        </>
    )
}

export {BlogPost}