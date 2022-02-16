import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

export default class AungUser extends Component{
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
                                <h2>Aung Myat</h2>
                            </div>

                            <div class="row">
                                <div class="col-lg-4">
                                    <img src="assets/img/portfolio/aung_icon.jpg" class="img-fluid" alt="" />
                                </div>
                                <div class="col-lg-8 pt-4 pt-lg-0 content">
                                    <h3>Scrum Master</h3>
                                    <p class="fst-italic">
                                        I am a undergraduate student, majoring in Computer Science. This is my last year
                                        at SFSU. For this team 02, which is about offering healthy habits, my role is
                                        Scrum Master.
                                    </p>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <ul>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>06 January 1999</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Place:</strong> <span>California</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>San Francisco</span></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6">
                                            <ul>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Degree Pursuing:</strong> <span>Bachelor</span></li>
                                                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>amyat@mail.sfsu.edu</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        I transferred to SFSU from City College of San Francisco back in 2020. <br />
                                        After transferring, I have learned a lot of materials about Web Development,
                                        Database Management System as well as multiple programming languages.<br /><br />

                                        This semester is supposed to be my last semester at SFSU as a undergraduate student
                                        I believe this semester and this course will help me learn a lot of new things,
                                        hoping everything works out well
                                         <br />
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>

                <footer id="footer">
                    <div className="container">
                        <div className="social-links">
                            <a href="mailto:amyat@mail.sfsu.edu"><span>&#9993;</span></a>

                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}