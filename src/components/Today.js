import Header from "../assets/Header";
import Footer from "../assets/Footer";
import dayjs from "dayjs";
import { locale } from "dayjs/locale/pt-br";
import UserContext from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {StandardBody} from "./GlobalStyle";
import { useEffect, useState } from "react";
import HabitsContext from "./HabitsContext";
import axios from "axios";
import styled from "styled-components";

export default function Today() {

  const {userData, setUserData} = useContext(UserContext);
  const {habits, setHabits, todayHabits, setTodayHabits, percentage, setPercentage} = useContext(HabitsContext);

  const { token } = userData;
  const config = {
    headers: {
        "Authorization": `Bearer ${token}`
    }
  }
  const navigate = useNavigate();
  const currentDate = dayjs().locale('pt-br');

  const [dados, setDados] = useState([]);
  const [habitsOn, setHabitsOn] = useState(false);
  const [doHabit, setDoHabit] = useState(true);

  useEffect(() => {
    /*const login = localStorage.getItem("login");
    if (login) {
      setDados(JSON.parse(login));
      const {token} = dados;
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
      console.log(dados);
    }*/
    if (token !== undefined) {
      console.log(token);
      const req = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
      console.log(req);
      req.then(({data}) => {
        setTodayHabits(data);
        if(data.length === 0) setPercentage(0);
        else {
          const per = todayHabits.filter((item) => item.done === true);
          console.log(per);
          setPercentage((per.length / todayHabits.length) * 100);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  
  }, [doHabit]);
  console.log(todayHabits);

  //const [btnClicked2, setBtnClicked2] = useState(true);
  function switchHabit(id, done) {
    console.log("chegou aqui");
    if (id && done){
      //{done: !done}
      const req = axios.put(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config);
      req.then(() => {
        //setBtnClicked2(true);
        setBtnClicked(true);
        setDoHabit(!doHabit);
        const per = todayHabits.filter((item) => item.done === true);
        setPercentage((per.length / todayHabits.length) * 100);
      }).catch(err => {
        console.log(err);
      })
    }
  }
  const [btnClicked, setBtnClicked] = useState(true);
  function habitListRender(){
    console.log(todayHabits);
    return (
      <>
        {todayHabits.map((habit, key) => 
          <HabitComponent key={key} backgroundcolor={habit.done}>
             <div>
                <h2>{habit.name}</h2>
                  <h3> Sequência atual: {`${habit.currentSequence} dia(s)`}</h3>
                  <h3>Seu recorde: {`${habit.highestSequence} dia(s)`}</h3>
              </div>
              <div>
              {btnClicked ?
                <ion-icon name="checkbox-outline" onClick={() => {
                  setBtnClicked(false);

                  switchHabit(habit.id, habit.done);
                }} /> : <ion-icon name="checkbox-outline"/>
              }
              </div>
          </HabitComponent>
        )}
      </>
    )
  }

  const spawnHabitsList = habitListRender();
  return (
    <>
      <Header />
      <StandardBody>
        <h1>{currentDate.format("dddd, DD/MM").replace(/^\w/, (c) => c.toUpperCase())}</h1>
        {percentage === 0 ? <h3>Nenhum habito concluído ainda</h3> : <h3>{percentage}% dos hábitos concluídos</h3>}
        <TodayHabitsList>
          {habitsOn ? <></> : spawnHabitsList}
        </TodayHabitsList>
      </StandardBody>
      <Footer percentage={percentage} />
    </>
  )
}

/*const HabitsColors = (props) => {
  const { day, selected } = props;
    return (
    <div style={{backgroundColor: selected ? "#DBDBDB" : "#FFFFFF"}}>
      <p style={{color: selected ? "#FFFFFF" : "#DBDBDB"}}>{day}</p>
    </div>
  )
}*/

function background(done) {
  if (done) return "#8FC549"
  else return "#EBEBEB"
}

const HabitComponent = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 13px 15px;
  color: #666666;
  ion-icon {
    font-size: 7em;
    border-radius: 5px;
    max-width: 69px;
    max-height: 69px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    color: ${({ backgroundcolor }) => background(backgroundcolor)};
  }
  .div {
    width: 300px;
    min-width: 50%;
  }
  h2 {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
  }
  h3 {
    font-size: 13px;
    line-height: 16px;
  }
`

const TodayHabitsList = styled.div`
  margin-top: 28px;
`