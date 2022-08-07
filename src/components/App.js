import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState }  from "react";
import { UserProvider } from "./UserContext";

import GlobalStyle from "./GlobalStyle";
import Login from "./Login";
import Register from "./Register";
import Today from "./Today";

import { useContext } from "react";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          {/*<Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
          */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App;
