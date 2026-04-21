import { useState } from 'react'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero';
import TrustedBy from './compnents/TrustedBy';
import Services from './compnents/Services';
import OurLatesetWork from './compnents/OurLatesetWork';
import Team from './compnents/Team';
import ContactUs from './compnents/ContactUs';
import { Toaster } from 'react-hot-toast';
function App() {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <div className='dark:bg-gray-900'>
      <Toaster/>
     <Navbar theme={theme} setTheme={setTheme}/>
     <Hero></Hero>
     <TrustedBy/>
     <Services/>
     <OurLatesetWork/>
     <Team/>
     <ContactUs/>
    </div>
  )
}

export default App
