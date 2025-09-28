import HeroPage from './pages/HeroPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import Error404Page from './pages/Error404Page'
import { Routes, Route } from "react-router-dom"
import { FC } from 'react'
 
const App: FC = () => {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Error404Page />} />
      

    </Routes>
    </>
   );
}
 


export default App;