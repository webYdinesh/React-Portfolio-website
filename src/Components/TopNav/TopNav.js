import React, { useEffect, useState } from "react";
import "./TopNav.css";
import { MdColorLens } from "react-icons/md";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";
const TopNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState("");
  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);
  const toggleTheme = (theme) => {
    document.body.className = theme;
  };
const openVariant={
  true:{
    height:'200px',
    overflow:'hidden'
    
  },
  false:{
    height:'0px',
    overflow:'hidden'
  }
}
  return (
    <div className="top-nav flex">
      <div className="logo flex">
        <h3>Dinesh</h3>
        <h4>Portfolio</h4>
      </div>
      <div className="theme-icon">
        <button className="toggle-theme" onClick={()=>setIsActive(!isActive)}>
          <MdColorLens fontSize={35} className="toggle-icon" />
        </button>
        <motion.div data-active={isActive} variants={openVariant} transition={{duration:.5 , type:'tween', stiffness:200}} animate={`${isActive}`} className="toggle-theme-model flex">
          <button onClick={() => {setTheme(""); setIsActive(false)}}>
            <SiVisualstudiocode fontSize={25} fill="#ff4482" />
          </button>
          <button onClick={() => {setTheme("yellow-theme"); setIsActive(false)}}>
            <SiVisualstudiocode fontSize={25} fill="#ffc300" />
          </button>
          <button onClick={() => {setTheme("blue-theme"); setIsActive(false)}}>
            <SiVisualstudiocode fontSize={25} fill="#00b4d8" />
          </button>
          <button onClick={() => {setTheme("red-theme"); setIsActive(false)}}>
            <SiVisualstudiocode fontSize={25} fill="#d90429" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TopNav;
