import {createContext, useState} from "react";

const UserContext = createContext({});

export function UserProvider({children}) {
  
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContext;