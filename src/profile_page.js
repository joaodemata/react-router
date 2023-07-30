import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "./auth";

const ProfilePage = ()=>{
    const auth = useAuth()
    const {username} = useParams();

    const canEdit = auth.users[auth?.user?.username]?.isAdmin || auth.user.username === username
    const canDelete = auth.users[auth?.user?.username]?.isAdmin;

    return (
        <>
            {/* <AuthRoute>  Si lo pones aqui debes atajar el auth.user?.username*/}
                <h1>Perfil</h1>
                <p>Welcome, {auth.user.username}</p>
                {canEdit && <button>Editar perfil</button>}
                {canDelete && <button>Eliminar perfil</button>}
            {/* </AuthRoute> */}
        </>
    )
}

export {ProfilePage}