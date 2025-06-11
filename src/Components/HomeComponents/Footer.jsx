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
        minHeight: "500px",
      }}
    >
      {/* Top Content */}
      <div
        className="container py-4 py-md-5 position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="row g-3 g-md-4 mb-4 mb-md-5">
          {/* CTA - Email Input */}
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <div className="bd-cta__input-item">
              <p className="fw-bold mb-3 text-white">Email Address</p>
              <div className="bd-cta__input position-relative">
                <input
                  type="text"
                  placeholder="info@webmail.com"
                  className="ml-5"
                  style={{ width: "240px" }}
                />
                <i className="ri-mail-open-line" style={{ color: "gray" }}></i>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="col-6 col-md-6 col-lg-2">
            <p className="fw-bold mb-3 text-white">About Us</p>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  className="text-white text-decoration-none hover-link"
                  to="#"
                >
                  Annual Reports
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white text-decoration-none hover-link"
                  to="#"
                >
                  Gallery (Photos and Videos)
                </Link>
              </li>
            </ul>
          </div>

          {/* Producer Companies */}
          <div className="col-6 col-md-6 col-lg-2">
            <p className="fw-bold mb-3 text-white">Producer Companies</p>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  className="text-white text-decoration-none hover-link"
                  to="#"
                >
                  MPCs Operationalized
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white text-decoration-none hover-link"
                  to="#"
                >
                  Setting up MPCs
                </Link>
              </li>
            </ul>
          </div>

          {/* Productivity Services */}
          <div className="col-6 col-md-6 col-lg-2">
            <p className="fw-bold mb-3 text-white">Productivity Services</p>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  className="text-white text-decoration-none hover-link"
                  to="#"
                >
                  Animal Nutrition Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white text-decoration-none hover-link"
                  to="#"
                >
                  AI Delivery Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-6 col-md-6 col-lg-3">
            <p className="fw-bold mb-3 text-white">Contact Us</p>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-start mb-3">
                <i className="ri-mail-line me-2 mt-1 flex-shrink-0"></i>
                <span className="word-break-all">
                  enquiry@nddbdairyservices.com
                </span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="ri-phone-line me-2 mt-1 flex-shrink-0"></i>
                <span>+91 7092922421</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="ri-map-pin-line me-2 mt-1 flex-shrink-0"></i>
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
      {/* Footer Bottom Bar */}
      <div
        className="container text-white small py-3 py-md-4"
        style={{
          zIndex: 3,
          position: "relative",
        }}
      >
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <span
              style={{
                color: "#004E1C",
                whiteSpace: "nowrap",
                fontWeight: "500",
              }}
            >
              © 2025 – NDDB Dairy Services. All rights reserved.
            </span>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <div
              className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3"
              style={{ whiteSpace: "nowrap" }}
            >
              <Link
                to="#"
                className="text-decoration-none hover-link"
                style={{ color: "#004E1C" }}
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-decoration-none hover-link"
                style={{ color: "#004E1C" }}
              >
                Return Policy
              </Link>
              <Link
                to="#"
                className="text-decoration-none hover-link"
                style={{ color: "#004E1C" }}
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{ zIndex: 1 }}
      >
        <img
          src={bgFooter}
          alt="Footer background"
          className="w-100"
          style={{
            height: "280px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Custom CSS for hover effects */}
      <style>
        {`
    .hover-link:hover {
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .bd-cta__input input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    .bd-cta__input input:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    }

    @media (max-width: 576px) {
      .small {
        font-size: 0.8rem;
      }
    }
  `}
      </style>
    </footer>
  );
};

export default Footer;
