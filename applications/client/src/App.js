import React from 'react';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about.component";
import PrathibaUser from "./components/prathiba.component";
import ChristopherUser from './components/christopher.component';

class App extends React.Component{
render() {
  //function App()  {
  return (
    <Router>
    <br />
    <Routes>
    <Route path='/prathiba' element={<PrathibaUser />} />
    <Route path='/myatkyaw' element={<MTKComponent />} />
    <Route path='/' exact element={<About />} />
    <Route path="/christopher" element={ChristopherUser} />
    </Routes>
</Router>
     
     
  );
  }
}
export default App;
