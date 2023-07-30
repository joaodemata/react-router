import React, { useContext } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

const adminList = [
    'Irisval',
    'RetaxMaster',
    'freddier'
];

const users = {
    "Irisval": {
        isAdmin: true,
        isBetaTester: false,
        isCreator: true
    },
    "RetaxMaster": {
        isAdmin: true,
        isBetaTester: false,
        isCreator: true
    },
    "freddier": {
        isAdmin: true,
        isBetaTester: false,
        isCreator: true
    }
}

const AuthContext = React.createContext();

function AuthProvider ({children}){
    const navigate = useNavigate()

    const [user, setUser] = React.useState(null)
    
    const login = (username, from) => {
        // const isAdmin = adminList.includes(username)
        const userPrivileges = users[username] || {
            isAdmin: false,
            isBetaTester: false,
            isCreator: false
        }
        setUser({username, privileges: userPrivileges})
        navigate(from, {replace: true})
    }

    const logout = () => {
        setUser(null)
        navigate('/')
    }


    const auth = {
        user,
        login,
        logout,
        users
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );

}

function useAuth(){
   const auth = React.useContext(AuthContext)
   return auth
}

function AuthRoute({children}){
    const auth = useAuth()
    let location = useLocation();

    if(!auth.user) {
      return <Navigate to="/login" state={{from: location?.pathname}}/>
    }

    return children

}

export {AuthProvider, AuthRoute, useAuth}