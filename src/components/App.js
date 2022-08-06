import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {createContext} from "react";
import GlobalStyle from "./GlobalStyle";
import Login from "./Login";

function App() {
  
  const UserContext = createContext();
  const [user, setUser] = React.useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          {/*
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
          */}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
