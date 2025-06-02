import React from "react";
import { Link } from "react-router-dom";
import bgFooter from "../../Images/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="text-white position-relative d-flex flex-column justify-content-between"
      style={{
        backgroundColor: "#004E1C",
        overflow: "hidden",
        height: "500px",
        // marginTop: '60px',
      }}
    >
      {/* Top Content */}
      <div
        className="container py-5 position-relative mb-5"
        style={{ zIndex: 2 }}
      >
        <div className="row g-4 mb-5">
          {/* CTA */}
          <div className="col-12 col-md-3">
            {/* <div className="input-group overflow-hidden">
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="How about a quick talk?"
                style={{ height: "50px", borderRadius: 0 }}
              />
              <button
                className="btn btn-light border-0"
                type="button"
                style={{
                  backgroundColor: "#5B8D52",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 0,
                }}
              >
                <i
                  className="ri-arrow-right-line fs-5"
                  style={{ color: "#fff" }}
                ></i>
              </button>
            </div> */}

            <div className="bd-cta__input-item mb-30">
              <p className="fw-bold mb-3 text-white">email address</p>
              <div className="bd-cta__input">
                <input type="text" placeholder="info@webmail.com" className="ml-5" />
                <i className="ri-mail-open-line" style={{color: 'gray'}}></i>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="col-6 col-md-2 mt-3">
            <p className="fw-bold mb-3 text-white">About Us</p>
            <ul className="list-unstyled small">
              <li>
                <Link className="text-white text-decoration-none" to="#">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="#">
                  Gallery (Photos and Videos)
                </Link>
              </li>
            </ul>
          </div>

          {/* Producer Companies */}
          <div className="col-6 col-md-2 mt-3">
            <p className="fw-bold mb-3 text-white">Producer Companies</p>
            <ul className="list-unstyled small">
              <li>
                <Link className="text-white text-decoration-none" to="#">
                  MPCs Operationalized
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="#">
                  Setting up MPCs
                </Link>
              </li>
            </ul>
          </div>

          {/* Productivity Services */}
          <div className="col-6 col-md-2 mt-3">
            <p className="fw-bold mb-3 text-white">Productivity Services</p>
            <ul className="list-unstyled small">
              <li>
                <Link className="text-white text-decoration-none" to="#">
                  Animal Nutrition Services
                </Link>
              </li>
              <li>
                <Link className="text-white text-decoration-none" to="#">
                  AI Delivery Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-6 col-md-3 mt-3">
            <p className="fw-bold mb-3 text-white">Contact Us</p>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start mb-2">
                <i className="ri-mail-line me-2 mt-1"></i>
                <span>enquiry@nddbdairyservices.com</span>
              </li>
              <li className="d-flex align-items-start mb-2">
                <i className="ri-phone-line me-2 mt-1"></i>
                <span>+91 7092922421</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="ri-map-pin-line me-2 mt-1"></i>
                <span>
                  NDDB House, Safdarjung Enclave,
                  <br />
                  New Delhi, Southwest Delhi, Delhi 110029
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div
        className="container text-white small pt-4 pb-3 "
        style={{
          zIndex: 3,
          position: "relative",
        }}
      >
        <div className="row align-items-center">
          <div
            className="col-md-6 text-center text-md-star mb-md-0"
            style={{
              color: "#004E1C",
            }}
          >
            © 2025 – NDDB Dairy Services. All rights reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link
              to="#"
              className=" me-3 text-decoration-none"
              style={{
                color: "#004E1C",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className=" me-3 text-decoration-none"
              style={{
                color: "#004E1C",
              }}
            >
              Return Policy
            </Link>
            <Link
              to="#"
              className=" text-decoration-none"
              style={{
                color: "#004E1C",
              }}
            >
              Terms and Condition
            </Link>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="position-absolute bottom-0 start-0 w-100">
        <img
          src={bgFooter}
          alt="Footer background"
          className="w-100"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "280px",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      </div>

      {/* Background Image */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        // style={{ height: "280px", zIndex: 1 }}
      >
        <img
          src={bgFooter}
          alt="Footer background"
          className="w-100 h-100 object-fit-cover mt-5"
          style={{
            objectFit: "cover",
            minHeight: "280px",
            maxHeight: "320px",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;

