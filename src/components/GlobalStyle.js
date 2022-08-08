import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    --placeholder-color: #DBDBDB;
    --input-color: #666666;
    --color-blue: #52B6FF;
  }
  body, html {
    font-family: 'Lexend Deca', sans-serif;
  }
`
const StandardBody = styled.div`
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
  h2{
    color: #666666;
  }
  h3{
    color: #BABABA;
  }
`

export {StandardBody};
export default GlobalStyle;