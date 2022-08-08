
import Header from "../assets/Header"
import Footer from "../assets/Footer"
import {StandardBody} from "./GlobalStyle";
import styled from "styled-components";

export default function History() {
  return (
    <>
      <Header/>
      <StandardBody>
        <MarginAdder>
          <h1>Histórico</h1>
        </MarginAdder>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </StandardBody>
      <Footer/>
    </>
  )
}

const MarginAdder = styled.div`
  margin-bottom: 10px;
`
