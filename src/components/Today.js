import Header from "../assets/Header";
import Footer from "../assets/Footer";
import dayjs from "dayjs";
import UserContext from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {StandardBody} from "./GlobalStyle";
import { useEffect, useState } from "react";

export default function Today() {

  const {userData, setUserData} = useContext(UserContext);
  const { token } = userData;
  const config = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
  }
  const navigate = useNavigate();
  const currentDate = dayjs().locale('pt-br');
  /*const {token} = userData;
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }*/
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      setDados(JSON.parse(login));
      const {token} = dados;
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      console.log(dados);
    }}, []);

  return (
    <>
      <Header />
      <StandardBody>
        <h1>{currentDate.format("dddd, DD/MM").replace(/^\w/, (c) => c.toUpperCase())}</h1>
        <h3>Nenhum habito concluído ainda</h3>
        {/*habitos*/}
      </StandardBody>
      <Footer />
    </>
  )
}