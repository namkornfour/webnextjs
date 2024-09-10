'use client'

import React,{createContext, useContext,useState} from 'react'
const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);

  return {
    auth : context.auth,
    setAuth: context.setAuth
  }
}

function AuthProvider({children}) {
    const [ auth, setAuth] = useState(false);

  return (
    <div>
        <AuthContext.Provider value={{auth, setAuth}}>
          {children}
        </AuthContext.Provider>
        
    </div>
  )
}

export default AuthProvider