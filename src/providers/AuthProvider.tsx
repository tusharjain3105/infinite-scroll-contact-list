import { createContext } from "preact";
import { useState } from "preact/hooks";

export const AuthContext = createContext(null);

const initialAuthenticated = () => {
  let cookies = document.cookie?.split(';')
  let authCookie = cookies.find(cookie => cookie.includes('authToken='))
  let authToken = authCookie?.split('=')?.[1]
  
  // TODO: Implement authentication token validation
  
  return !!authToken
}

export default ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated)
  
  const value = {
    isAuthenticated,

    login: async (username:string, password:string, rememberMe: boolean) : Promise<boolean> => {
        let authToken = username                                // TODO: Implement login API
        let expiry = new Date()
        expiry.setDate(2099)
        document.cookie = `authToken=${authToken}; expires=${rememberMe && expiry}`
        setIsAuthenticated(true)
        return true
    },

    logout: async () : Promise<boolean> => {
        document.cookie = `authToken=''; expires=${new Date(0)}` // TODO: Implement logout API
        setIsAuthenticated(false)
        return true
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

