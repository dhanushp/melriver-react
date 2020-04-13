import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home";


//routes


function App() {
  useEffect(() => {

    // Grab inner height of windwos for mobile reasons with dealing vh
    let vh = window.innerHeight * 0.01;
    // Set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    //Prevents flashing
    gsap.to('body', 0, {css: {visibility:"visible"} });
  })

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
