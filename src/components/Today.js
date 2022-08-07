import styled from "styled-components";
import Header from "../assets/Header";

export default function Today() {
  return (
    <>
      <Header />
      {/*TODO: create header*/}
      <TodayBody>
        <h1>Oi</h1>
        <h2>Nenhum habito concluído ainda</h2>
        {/*habitos*/}
      </TodayBody>
      {/*TODO: create footer*/}
    </>
  )
}

const TodayBody = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin-top: 70px;
  padding: 30px 15px 110px 15px;
  background-color: #E5E5E5;
  h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
  }
`