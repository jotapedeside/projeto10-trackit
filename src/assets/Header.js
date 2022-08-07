import styled from "styled-components";
import { Link } from "react-router-dom";
import AssetsImgs from "./img/AssetsImg";
import UserContext from "../components/UserContext";
import { useContext } from "react";

export default function Header(){
  const {userData} = useContext(UserContext);
  const {image} = userData;
  
  return (
    <HeaderWrapper>
      <Link to="today">
        <img src={AssetsImgs.TrackIt} alt="" />
      </Link>
      <div>
        <UserImg src={image} alt={image} />
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  /*ion-icon {
      font-size: 45px;
      color: white;
      cursor: pointer;
  }*/
  img{
    width: 97px;
    height: 49px;
  }
`
const UserImg = styled.img`
  &&{width: 51px ;
  height: 51px;
  border-radius: 98.5px;
  object-fit: cover;}
  `