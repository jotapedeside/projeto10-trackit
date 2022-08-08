import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState }  from "react";
import { UserProvider } from "./UserContext";

import GlobalStyle from "./GlobalStyle";
import Login from "./Login";
import Register from "./Register";
import Today from "./Today";
import Habits from "./Habits";
import History from "./History";
import {HabitsProvider} from "./HabitsContext";

import { useContext } from "react";

function App() {

  return (
    <UserProvider>
      <HabitsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </BrowserRouter>
      </HabitsProvider>
    </UserProvider>
  )
}

export default App;
