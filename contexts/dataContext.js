import { createContext, useState, useContext } from "react";


export const dataSettingsContext = createContext();

export const useSettingsContext = () => useContext(dataSettingsContext);

export const DataProvider = ({children}) => {
    const [time, setTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);

    return (
        <dataSettingsContext.Provider value={{time, setTime, breakTime, setBreakTime}}>
            {children}
        </dataSettingsContext.Provider>
    )
}