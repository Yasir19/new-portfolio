import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Feader from "./components/Feader";


function App() {
  const [screens] = useState([
    {
      name:"about me"
    },
    {
      name:'project'
    },
    {
      name:'contact me'
    },
    {
      name: 'resume'
    }
  ]);
  const [currentScreen, setCurrentScreen] = useState(screens[0])

  return (
    <div className="grid">
        <Nav
        screens={screens}
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}
        ></Nav>
      <main>
        <Feader currentScreen={currentScreen}></Feader>
      
      </main>
      <Footer/>

   
    </div>
   
  );
}

export default App;

