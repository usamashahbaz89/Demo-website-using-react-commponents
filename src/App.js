import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Latestnews from './components/latestnews';
// import Moregamingnews from './components/moregamingnews';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Registration from './components/Registration';
import {Routes, Route} from 'react-router-dom';
import Servicesnames from './components/servicesnames';



function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes>

    <Route  path="/" element={<Homepage/>} />
    <Route  path="/registration" element={<Registration/>} />
    <Route  path="/services" element={<Servicesnames/>} />
     
     </Routes>
     
    <Footer/> 
    
    
    
     
    
      {/* <Practiceformik/> */}
      
    {/* <Latestnews/>
    <Grid/> 
    <Moregamingnews/> */}
   
    
    {/* <Setstate/> */}
    {/* <State/> */}
    </div>
  );
}

export default App;
