import { createContext, useState } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
const StateContext = createContext(initialState);

export const ContextProvider = (props) => {
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [themeMode , setThemeMode] = useState("Light")
  const [themeColor , setThemeColor] = useState("#03c9d7")
  const [themeSetting , setThemeSetting] = useState(false)

  const modeHandler =(e)=>{
    setThemeMode(e.target.value)
    localStorage.setItem("mode", e.target.value)
    setThemeSetting(false)
  }
  const colorHandler =(color)=>{
    setThemeColor(color)
    localStorage.setItem("color", color)
    setThemeSetting(false)
  }




  const clickHandler = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const closeClickHandler = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };

  return (
    <StateContext.Provider
      value={{
        isActiveMenu,
        setIsActiveMenu,
        isClicked,
        clickHandler,
        screenSize,
        setScreenSize,
        themeSetting,
        setThemeSetting,
        modeHandler,
        colorHandler,themeMode, themeColor, closeClickHandler
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
export default StateContext;
