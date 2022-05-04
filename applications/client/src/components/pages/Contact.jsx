import React from "react";
import Navbar from "../Navbar";

const handleSubmit = () => {
  alert("Message sent succesfully!! wait for our Response.");
};

function Contact() {
  return (
    <div>
      <Navbar />
    <div className="container" data-aos="fade-up">
      
      <div className="section-title">
        <h2>Contact</h2>
      </div>

      <div className="row mt-1">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>San Francisco State University, 1600 Holloway Ave, San Francisco, CA 94132</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@iPlate.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 (111) 111-1111</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary button" onClick={handleSubmit}>
          Send Message
        </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
