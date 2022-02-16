<<<<<<< HEAD
import React from "react";
import "./App.css";
=======
import {Component} from 'react';
import './App.css';
>>>>>>> 8af401a672191fb2ee9ce9d4484b882bb6df5a09
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about.component";
import PrathibaUser from "./components/prathiba.component";
<<<<<<< HEAD
import TunniUser from "./components/tunni.component";

// class App extends React.Component{
// render() {
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/prathiba" element={<PrathibaUser />} />
        <Route path="/tunni" element={<TunniUser />} />
=======
import ChristopherUser from './components/christopher.component';
import MTKComponent from "./components/MTK.component";

class App extends Component{
render() {
  return (
    <Router>
      <br />
      <Routes>
      <Route path='/prathiba' element={<PrathibaUser />} />
      <Route path='/myatkyaw' element={<MTKComponent />} />
      <Route path="/christopher" element={ChristopherUser} />
      <Route path='/' exact element={<About />} />
>>>>>>> 8af401a672191fb2ee9ce9d4484b882bb6df5a09
      </Routes>
    </Router>
  );
<<<<<<< HEAD
=======
  }
>>>>>>> 8af401a672191fb2ee9ce9d4484b882bb6df5a09
}

export default App;
