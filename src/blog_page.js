import React from "react";
import {Link, Outlet} from "react-router-dom"
import {blogdata} from './blog_data'
import { useAuth } from "./auth";

const BlogPage = ()=>{
    const auth = useAuth()

    const canCreate = auth.user?.privileges?.isCreator || auth.user?.privileges?.isAdmin

    return (
        <>
            <h1>Blog</h1>
            
            <Outlet/>

            <ul>
                {
                blogdata.map(_post =>  <BlogLink key={_post.slug} post={_post}/>)
                }
            </ul>

            {canCreate && (<button>Crear Post</button>)}
        </>
    )
}

function BlogLink({post}){
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )
}


export {BlogPage}