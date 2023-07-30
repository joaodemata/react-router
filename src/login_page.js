import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const LoginPage = ()=>{
    const location = useLocation();

    const auth = useAuth()
    const [username, setUsername] = React.useState('');
    const [navigateUrl, setNavigateUrl] = React.useState('/profile')
    
    // Si viene un estado con url, entonces rederijimos a esa pagina
    React.useEffect(() => {
        if(location?.state?.from){
            setNavigateUrl(location?.state?.from)
        }
    }, []);


    const login = (e) => {
        e.preventDefault();
        auth.login(username, navigateUrl === '/profile' ? `${navigateUrl}/${username}` : navigateUrl)
    }

    if(auth.user){
      return <Navigate to={`/profile/${auth.user.username}`}/>
    }

    return (
        <>
            <h1>LoginPage</h1>
            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario:</label>
                <input value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export {LoginPage}