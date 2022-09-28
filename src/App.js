import React, { useContext, useState } from "react";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Line,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import StateContext from "./context/ContextProvider";

const App = () => {
  const ctx = useContext(StateContext);

  return (
    <div className={`${ctx.themeMode === 'Dark' ? "dark" :''} `}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 text-white  hover:drop-shadow-xl hover:bg-light-gray rounded-full"
                style={{ background: ctx.themeColor}}
                onClick={()=>{ctx.setThemeSetting(true)}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> 

          <div
            className={` fixed sidebar dark:bg-secondary-dark-bg bg-white transition-all ease-in-out duration-1000  ${
              ctx.isActiveMenu ? "w-72" : " w-0  "
            }`}
          >
            <Sidebar />
          </div>

          <div
            className={`dark:bg-main-dark-bg main-h-screen w-full transition-all ease-in-out duration-1000 ${
              ctx.isActiveMenu ? "md:ml-72 " : "flex-2 "
            }`}
          >
            <div className="fixed md:static  dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          

          <div>
           { ctx.themeSetting && <ThemeSettings />}
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorPicker />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
