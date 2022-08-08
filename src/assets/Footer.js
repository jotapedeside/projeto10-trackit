import styled from "styled-components";
import {Link} from "react-router-dom";
import AssetsImgs from "./img/AssetsImg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer({percentage}){
  //const roundedPercentage = Math.round(percentage);
  const roundedPercentage = 66;
  return (
    <FooterWrapper>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <div>
        <Link to="/hoje">
          <CircularProgressbar value={roundedPercentage}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
              backgroundColor: "#52B6FF",
              textSize: "18px",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              strokeLinecap: 'round'
          })}
          />
        </Link>
      </div>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    position: fixed;
    bottom: 0; left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
    p {
      font-size: 18px;
      line-height: 22px;
      color: var(--color-blue);
    }
    div{
      position: fixed;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      width: 91px;
      height: 91px;
    }
    a {
      text-decoration: none;
    }
`