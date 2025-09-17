

import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);
  return (
    <div className='app'>
      <Sidebar darkMode={darkMode} toggleTheme={toggleTheme}/>
      <Main darkMode={darkMode} toggleTheme={toggleTheme}/>
    </div>
  )
}


export default App