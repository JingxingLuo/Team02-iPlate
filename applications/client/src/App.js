import React from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./components/about.component";
import PrathibaUser from "./components/prathiba.component";
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
      </Routes>
    </Router>
  );
}

export default App;
