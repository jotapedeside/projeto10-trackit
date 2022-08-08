import {createContext, useState} from "react";

const HabitsContext = createContext({});

export function HabitsProvider({children}) {
  
  const [habits, setHabits] = useState([]);

  return (
    <HabitsContext.Provider value={{habits, setHabits}}>
      {children}
    </HabitsContext.Provider>
  )
}
export default HabitsContext;