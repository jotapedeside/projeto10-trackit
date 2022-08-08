import {createContext, useState} from "react";

const HabitsContext = createContext({});

export function HabitsProvider({children}) {
  
  const [habits, setHabits] = useState([]);
  const [todayHabits, setTodayHabits] = useState([]);
  const [percentage, setPercentage] = useState(0);
  return (
    <HabitsContext.Provider value={{habits, setHabits, todayHabits, setTodayHabits, percentage, setPercentage}}>
      {children}
    </HabitsContext.Provider>
  )
}
export default HabitsContext;