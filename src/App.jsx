 import React, {useEffect, useState } from "react";

 import Navbar from "./components/navbar";
 import HeroSection from './components/HeroSection';
 import About from "./components/About";
 import Projects from "./components/projects";
 import Contacts from './components/Contacts';
 import Reviews from "./components/reviews";
 function App() {
  const [theme, setTheme ] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }else{
    document.documentElement.classList?.remove('dark');

    }

  },[theme]);

  const handleThemeswitch = () =>{
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <Navbar />
      <img
       src="/my-image.jpg"  // Update with the correct path to your image
       alt="Your Alt Text"
       style={{ width: '60px', height: '60px', cursor: 'pointer' }}
       className="fixed z-10 left-2 top-2 rounded-full"
      />
    
      <div className={`font-inter ${theme === 'dark' ? 'dark' : ''} bg-black`}>     
       <HeroSection></HeroSection>
        <About />
        <Projects />
        <Contacts />
        <Reviews />
      </div>
    </>
  )
}

export default App