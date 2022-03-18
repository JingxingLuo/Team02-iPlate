import React, { Component } from 'react';
//import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class MTKComponent extends Component{
    render() {
        return (
            <div>

                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button>
                <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

                <header id="header" class="d-flex flex-column justify-content-center">

                    <nav id="navbar" class="navbar nav-menu">
                        <ul>

                            <li><Link to="/" class="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>

                        </ul>
                    </nav>

                </header>

                <main id="main">


                    <section id="about" class="about">
                        <div class="container">

                            <div class="section-title">
                                <h2>Myat Kyaw</h2>
                            </div>

                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="assets/img/portfolio/mtk_icon.JPG" class="img-fluid" alt=""/>
                                </div>
                                <div class="col-lg-8 pt-4 pt-lg-0 content">
                                    <h3>GitHub Master</h3>
                                    <p class="fst-italic">
                                        This is my final semester here at SFSU and I am excited to collaborate with my teammates
                                        ( Section 01 Team 02 for CSC 648 ) to participate in developing this food recording app :)
                                    </p>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <ul>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 April 1996</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Place:</strong> <span>Myanmar</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Yangon</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6">
                                            <ul>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelors</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mkyaw@sfsu.com</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        My name is Myat Kyaw. I transferred from City college of San Francisco
                                        to SFSU back in 2020, and this is my final semester here at SFSU. At the moment,my programming career goal would be
                                        to be a Web Developer.<br/>
                                    This is my second Web Development class, and I am still kind of new to the field.
                                        <br/>
                                     I am excited to collaborate and work with other students on this major web development project.
                                        <br/>
                                    </p>
            </div>
    </div>

    </div>
    </section>

    </main>


    <footer id="footer">
    <div class="container">
    <div class="social-links">
    <a href="mailto:mkyaw@mail.sfsu.edu"><span>&#9993;</span></a>
    <a href="https://www.linkedin.com/in/myat-kyaw-0a82511b5/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
    </div>
    </div>
    </footer>
 </div>
        )
    }
}

