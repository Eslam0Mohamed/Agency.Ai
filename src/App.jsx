import { useState } from 'react'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero';
import TrustedBy from './compnents/TrustedBy';
import Services from './compnents/Services';

function App() {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <div className='dark:bg-gray-800'>
     <Navbar theme={theme} setTheme={setTheme}/>
     <Hero></Hero>
     <TrustedBy/>
     <Services/>
    </div>
  )
}

export default App
