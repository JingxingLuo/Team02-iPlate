import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class ChristopherUser extends Component{
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
          <h2>Christopher Ling</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/portfolio/christopher_icon.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Front-end Support</h3>
            <p class="fst-italic">
				I'm part of the CSC-648 section 01 team 02 web development collaboration
				that is building an app to promote healthy habits.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 September 1992</span></li>
				  <li><i class="bi bi-chevron-right"></i> <strong>Place:</strong> <span>California</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Oakland</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelor</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cling1@mail.sfsu.edu</span></li>
                </ul>
              </div>
            </div>
            <p>
			I've been in and out of Commuunity College from College of San Mateo, Kinata, and Skyline before transfering to
			SFSU in Fall 2018.<br />
			This semester fulfils my last core CSC requirements; if everything goes well,
				I just need to finish my senior presentation and complete 4 more CSC upper-division
				Electives to finish my BS in Computer Science.<br /><br />
			I wouldn't say I'm strong in web development, but I hope to learn and refresh myself on these 
			methods and technology along with my Team. <br />
            </p>
          </div>
        </div>

      </div>
    </section>

  </main> 
</div>
      )
    }
}