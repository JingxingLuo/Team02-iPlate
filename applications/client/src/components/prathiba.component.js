import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class PrathibaUser extends Component{
render() {
  return (
    <div>
    <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button>
    <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
    <header id="header" class="d-flex flex-column justify-content-center">
    
     <nav id="navbar" class="navbar nav-menu">
       <ul>
         <li><Link to="/" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></Link></li>
       </ul>
     </nav>
    
    </header>
    
    <main id="main">
    
     <section id="about" class="about">
       <div class="container">
    
         <div class="section-title">
           <h2>Prathiba Ramesh</h2>
         </div>
    
         <div class="row">
           <div class="col-lg-4">
             <img src="assets/img/portfolio/prathiba_icon.jpg" class="img-fluid" alt="" />
           </div>
           <div class="col-lg-8 pt-4 pt-lg-0 content">
             <h3>Team Leader</h3>
             <p class="fst-italic">
         This is my first semester in San Francisco State University and I am pursuing my Master's in Computer Science. 
         I am happy to be a part of Section 01 Team 02 for CSC 648/848 and develop a custom app that each individual should 
         have in order to indulge in a healthy lifestyle.
             </p>
             <div class="row">
               <div class="col-lg-6">
                 <ul>
                   <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 October 1995</span></li>
           <li><i class="bi bi-chevron-right"></i> <strong>Place:</strong> <span>India</span></li>
                   <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chennai</span></li>
                 </ul>
               </div>
               <div class="col-lg-6">
                 <ul>
                   <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                   <li><i class="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Master</span></li>
                   <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pramesh@sfsu.com</span></li>
                 </ul>
               </div>
             </div>
             <p>
        I completed my Undergrad in BE, Electronics and Instrumentation and have started working at the Tata consultancy Services Limited since 2017
        as a Software Developer. <br />
        To date, I have worked on two projects, the first of which involved data migration and upgrading applications to the 
        latest framework. For this company, I had to refurbish over 30 web based applications into the latest .Net framework and 
        rewrite the classic ASP code into MVC framework with the use of C#, HTML, CSS, Javascript and JQuery. <br /> <br />
        The next project I worked on was a windows application used by the retail sector of corporate buying department to 
        maintain the social monitoring processes and freight management systems. Lastly, I worked on supporting the market-leading 
        retail firms such as JCPenney and Aldi Sued, wherein I was responsible for solving all the problems faced by the end-user.
             </p>
           </div>
         </div>
    
       </div>
     </section>
    
    </main>
    
    <footer id="footer">
     <div class="container">
       <div class="social-links">
         <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
         <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
         <a href="https://www.linkedin.com/in/prathiba-r-b19491157/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
       </div>
       </div>
       </footer>
     </div>
  )
}
}
