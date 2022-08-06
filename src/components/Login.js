import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import AssetsImgs from "../assets/img/AssetsImg";

export default function Login(){

  //const { setUserInfo, setSidebaropen } = useContext(UserContext);
  //const navigate = useNavigate();
  const [estaSalvo, setEstaSalvo] = useState(true)
  const forms = inputs()
  return (
    <LoginScreen>
        {/* TODO: ifsaved logic
        {estaSalvo ? <Loader text="Um Segundo"/> : TREMdeBAIXO}*/}
        <>
          <img src={AssetsImgs.Logo} alt="logo" />
          <Forms onSubmit={validateLogin}>{forms}</Forms>
        </>
    </LoginScreen>
  )
}

/*function upd(){

}*/

function inputs() {
  return (
    <>
      <input
        type="email"
        placeholder="email"
        required
      />
      <input
        type="password"
        placeholder="password"
        required
      />
      <button>
        {/*enable button logic*/}
      </button>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </>
  )
}

function validateLogin(event) {
  //TODO: sign up logic
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
