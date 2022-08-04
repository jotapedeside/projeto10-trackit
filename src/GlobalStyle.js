import { createGlobalStyle } from "styled-components";
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
`;

export default GlobalStyle;