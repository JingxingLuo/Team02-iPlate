import {Component} from 'react';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about.component";
import PrathibaUser from "./components/prathiba.component";


class App extends Component{
render() {
  return (
    <Router>
      <br />
      <Routes>
      <Route path='/prathiba' element={<PrathibaUser />} />
      <Route path='/' exact element={<About />} />
      </Routes>
  </Router>
  );
  }
}

export default App;
