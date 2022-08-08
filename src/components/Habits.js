import Header from "../assets/Header"
import Footer from "../assets/Footer"
import {StandardBody} from "./GlobalStyle";
import { useState } from "react";
import styled from "styled-components";
//import {daysList, setDaysList} from "daysList";
import axios from "axios";
import { useContext } from "react";
import UserContext from "./UserContext";
import HabitsContext from "./HabitsContext";

export default function Habits() {
  //const [habits, setHabits] = useState([]);
  const [enableBtn, setEnableBtn] = useState(true);
  const [habitData, setHabitData] = useState({
    name: "",
    days: []
  });
  const [send, setSend] = useState(true);
  const [daysList, setDaysList] = useState([
    {day: 'D', selected: false},
    {day: 'S', selected: false},
    {day: 'T', selected: false},
    {day: 'Q', selected: false},
    {day: 'Q', selected: false},
    {day: 'S', selected: false},
    {day: 'S', selected: false},
])
const {userData, setUserData } = useContext(UserContext);
const {habits, setHabits } = useContext(HabitsContext);
const { token } = userData;
const config = {
  headers: {
      "Authorization": `Bearer ${token}`
  }
}

  function handlePostHabit(){
    console.log(habitData);
    //if(send){
      //tratamento de casos
      if(habitData.name.length === 0){
        return alert ("Preencha o nome do hábito");
      } else if (habitData.days.length === 0) {
        return alert ("Selecione pelo menos um dia");
      } else {
      const res = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        habitData, config);
        console.log(res);
      }
    //}
  }

  function switchDay(id) {
    const days = [...daysList];
    days[id].selected = !days[id].selected;
    console.log(days);
    const daysListArray = [...daysList];
    const res = [];
    daysListArray.map((item, index) => {
      if(item.selected) res.push(index);
    });
    console.log(res);
    setHabitData({days: res});
  }

  function createNewHabit(){
    return(
      <HabitCreation>
        <input
          placeholder="nome do hábito"
          value={habitData.name}
          onChange={e=> setHabitData({...habitData, name: e.target.value})}/>
        <DaysList>
          {daysList.map((ii, key) =>
            <Day
              key={key}
              index={key}
              selected={ii.selected}
              day={ii.day}
              onClick={switchDay}
              >
              <p>{ii.day}</p>
            </Day>)}
        </DaysList>
        <LowerOrganizer>
          <p onClick={() => setEnableBtn(true)}>Cancelar</p>
          <HabitCreateBtn onClick={handlePostHabit}>Criar</HabitCreateBtn>
        </LowerOrganizer>
      </HabitCreation>
    )
  }
  const newHabit = createNewHabit();
  return (
    <>
      <Header/>
      <StandardBodyHabit>
        <HabitHeader>
          <h1>Meus hábitos</h1>
          <div onClick={() => setEnableBtn(false)}>+</div>
        </HabitHeader>
        {enableBtn ? <></> : newHabit}
        {habits.length === 0 ?
        <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2> :
        <h2>Listar habitos</h2>}
      </StandardBodyHabit>
      <Footer/>
    </>
  )
}
/*
function changeLetterColor(daySelected) {
  if (daySelected) return "#ffffff"
  else return "#DBDBDB"
}
function changeBackgroundColor(daySelected) {
  if (daySelected) return "#DBDBDB";
  else return "#ffffff"
}*/
const HabitCreation = styled.div`
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  margin: 20px 15px;
  /*position: relative;*/
  p {
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    bottom: 22px; right: 120px;
    cursor: pointer
  }
`

const HabitCreateBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  background: #52B6FF;
  border-radius: 5px;
  font-size: 16px;
  color: #FFFFFF;
  cursor: pointer;
`

const StandardBodyHabit = styled(StandardBody)`
  div:first-child{
    margin-bottom: 20px;
  }
  h2{
    color: #666666;
  }

  input{
    width: 88%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin: 18px 19px 10px 19px;
    padding-left: 11px;
    font-size: 20px;
    color: var(--input-color);
    :focus {
      outline: none;
      border-color: var(--color-blue);
    }
    ::placeholder {
      color: #DBDBDB;
    }
  }
`
const HabitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #ffffff;
    width: 40px;
    height: 36px;
    background: #52B6FF;
    font-size: 27px;
    border-radius: 5px;
  }
  div:hover{
    background-color: rgba(82,182,255, 0.7);
  }
  div:active{
    background-color: rgba(82,182,255, 0.5);
  }
`

const LowerOrganizer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div, p{
    margin: 10px 16px;
  }
`

const DaysList = styled.div` 
    display: flex;
    justify-content: flex-start;
    margin: 0 14px;
    //padding: 0 4px;
    display: flex;

    div{
      width: 30px;
      height: 30px;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
    }
    p {
      font-size: 20px;
    }
`

const Day = (props) => {
  //const [ selected, setSelected ] = useState(false);
  const { day, selected, onClick, index } = props;
    return (
    <div onClick={() => onClick(index)} style={{backgroundColor: selected ? "#DBDBDB" : "#FFFFFF"}}>
      <p style={{color: selected ? "#FFFFFF" : "#DBDBDB"}}>{day}</p>
    </div>
  )
}
/*  styled.div`
  background: ${({ selected }) => changeBackgroundColor(selected)};
  p {
    color: ${({ selected }) => changeLetterColor(selected)};
 }
`
*/
