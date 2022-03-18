import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class Jingxing extends Component{
render() {
  return (
    <div>
    <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button>
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <header id="header" class="d-flex flex-column justify-content-center">
    
     <nav id="navbar" class="navbar nav-menu">
       <ul>
         <li><Link to="/about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></Link></li>
       </ul>
     </nav>
    
    </header>
    
    <main id="main">
    
     <section id="about" class="about">
       <div class="container">
    
         <div class="section-title">
           <h2>Jingxing Luo</h2>
         </div>
    
         <div class="row">
           <div class="col-lg-4">
             <img src="assets/img/portfolio/Jingxing_icon.jpg" class="img-fluid" alt="" />
           </div>
           <div class="col-lg-8 pt-4 pt-lg-0 content">
             <h3>Back-end Leader</h3>
             <p class="fst-italic">
             This is my final semester in San Francisco State University. This is the first time 
				I will develop a website via server side. I am excited to be a back-end leader to suppport
				my teammates.
             </p>
             <div class="row">
               <div class="col-lg-6">
                 <ul>
                   <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>12 December 1996</span></li>
           <li><i class="bi bi-chevron-right"></i> <strong>Place:</strong> <span>Guangzhou, China</span></li>
                   <li><i class="bi bi-chevron-right"></i> <strong>Stack:</strong> <span>MongoDB | Node | React</span></li>
                 </ul>
               </div>
               <div class="col-lg-6">
                 <ul>
                   <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                   <li><i class="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelor</span></li>
                   <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jluo17@mail.sfsu.edu</span></li>
                 </ul>
               </div>
             </div>
             <p>
             I transferred from Foothill College to SFSU in Fall 2020. After taking some CS classes at SFSU,
			I learned many new and useful things including how to make the interactions between front-end and back-end.
			For my future career, I hope I will be developing a video game. 
             </p>
           </div>
         </div>
       </div>
     </section>
    </main>
    
    <footer id="footer">
     <div class="container">
       <div class="social-links">         
         
       </div>
       </div>
       </footer>
     </div>
  )
}
}

