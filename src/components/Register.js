import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AssetsImgs from "../assets/img/AssetsImg";
import axios from "axios";
import UserContext from "../components/UserContext";
import { useContext } from "react";


export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });
  const [enableBtn, setEnableBtn] = useState(true);

  const { setUserData } = useContext(UserContext);

  const forms = inputs();
  //INTERNAL FUNCTIONS

  function inputs(){
    return (
      <>
        <input
          type="email"
          placeholder="email"
          required
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="name"
          required
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="url"
          placeholder="photo"
          required
          value={user.image}
          onChange={e => setUser({ ...user, image: e.target.value })}
        />
        <button>
          Cadastrar
          {/*enable button logic*/}
        </button>
        <Link to="/">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </>
    )
  }

  function validateLogin(event) {
    console.log(user);
    event.preventDefault();
    if (enableBtn){
      setEnableBtn(false);
      const res = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
        email: user.email,
        name: user.name,
        image: user.image,
        password: user.password
    });
      res.then(() => {
        setUserData(res.data);
        navigate("/")
      })
      .catch((e) => {
        console.log(e);
        alert("Um erro ocorreu: " + e.res + ". Por favor, tente novamente.");
        setEnableBtn(true);
      })
    }
  }

  return (
    <LoginScreen>
      {/* TODO: ifsaved logic
      {isSaved ? <Loader text="Um Segundo"/> : TREMdeBAIXO}*/}
      <>
        <img src={AssetsImgs.Logo} alt="logo" />
        <Forms onSubmit={validateLogin}>{forms}</Forms>
      </>
    </LoginScreen>
  )
}

const LoginScreen = styled.div`
  p{
    margin-top: 25px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    
    text-decoration-line: underline;
    color: #52B6FF;
  }
  img{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5em auto 2em auto;
  }
`

const Forms = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input,
    button {
      font-size: 21px;
      cursor: pointer;
      width: 303px;
      height: 45px;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      margin-bottom: 6px;
      padding: 11px;
      color: var(--input-color);
    }
    button {
      color: #ffffff;
      line-height: 26px;
      background: var(--color-blue);
    }
    input:focus,
    button:focus {
      outline: none;
      border-color: var(--color-blue);
    }
    input::placeholder {
      font-size: 20px;
      line-height: 25px;
      color: var(--placeholder-color);
    }
`
