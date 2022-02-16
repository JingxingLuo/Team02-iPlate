import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

export default class TunniUser extends Component {
  render() {
    return (
      <div>
        <button type="button" class="mobile-nav-toggle d-xl-none">
          <i class="bi bi-list mobile-nav-toggle"></i>
        </button>
        <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header" class="d-flex flex-column justify-content-center">
          <nav id="navbar" class="navbar nav-menu">
            <ul>
              <li>
                <Link to="/" class="nav-link scrollto">
                  <i class="bx bx-user"></i> <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main">
          <section id="about" class="about">
            <div class="container">
              <div class="section-title">
                <h2>Tun-Ni Chiang</h2>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <img
                    src="assets/img/portfolio/tunni_icon.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content">
                  <h3>Team Leader</h3>
                  <p class="fst-italic">
                    This is my second to the last semester at SFSU! Wish our
                    application could help some people who are struggling in
                    building a healthy eating habits or help them to rebuild
                    their relationship with foods :)
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i class="bi bi-chevron-right"></i>{" "}
                          <strong>Birthday:</strong>{" "}
                          <span>17 January 2000</span>
                        </li>
                        <li>
                          <i class="bi bi-chevron-right"></i>{" "}
                          <strong>Place:</strong> <span>Taiwan</span>
                        </li>
                        <li>
                          <i class="bi bi-chevron-right"></i>{" "}
                          <strong>City:</strong> <span>Taipei</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i class="bi bi-chevron-right"></i>{" "}
                          <strong>Age:</strong> <span>22</span>
                        </li>
                        <li>
                          <i class="bi bi-chevron-right"></i>{" "}
                          <strong>Degree Pursuing:</strong>{" "}
                          <span>Bachelor</span>
                        </li>
                        <li>
                          <i class="bi bi-chevron-right"></i>{" "}
                          <strong>Email:</strong>{" "}
                          <span>tchiang3@mail.sfsu.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    I transferred from Bellevue College in Washington State in
                    2020. After coming here, I got some chances to learn Web Dev
                    related skills. After learning them, I realized my interest
                    for future career is more in this area so wanting to explore
                    and practice more! <br />
                    In Spring 2022, I will be joining Food Haven as their SDE
                    Intern to support them on the second version of their web
                    and mobile app interface. It's going to be my first
                    internship experience and I'm looking forward to improve my
                    skills! <br /> <br />
                    I'm still pretty new in web app development and am excited
                    to work with others on building this custom food recording
                    app! Wish to provide some helpful tool to help our society!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div class="container">
            <div class="social-links">
              <a href="#" class="facebook">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/prathiba-r-b19491157/"
                class="linkedin"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
