import bgImage from "../../Images/bg-structure.png";
import image1 from "../../Images/wind.png";
import image2 from "../../Images/wind.png";

const DairyServices = () => {
  return (
    <div className="dairy-services-section position-relative overflow-hidden  mt-50 mb-50">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-7 mb-5 mb-lg-0">
            <h2
              className="bd-section__title"
              style={{
                marginBottom: "15px",
              }}
            >
              NDDB Dairy Services
            </h2>
            <p className="bd-section__paragraph mb-4">
              NDDB Dairy Services (NDS), a Section 8 company registered under
              the Companies Act, is a wholly owned subsidiary of the National
              Dairy Development Board (NDDB). It functions as the delivery arm
              of NDDB for field operations relating to promoting Producer
              Companies (PCs) and Productivity Enhancement Services of milch
              animals.
            </p>

            <div
              className="card mb-4 p-3"
              style={{
                background: "#c5e7d1",
                borderRadius: "4px",
                borderLeft: "6px solid #1FC25A",
                borderRight: 0,
                borderTop: 0,
                borderBottom: 0,
              }}
            >
              <div className="d-flex align-items-center mb-2">
                <i
                  className="ri-focus-2-line icon-img me-2"
                  style={{
                    color: "green",
                    fontSize: "22px",
                  }}
                ></i>
                <h5
                  className="fw-semibold mt-1 "
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  Our Mission
                </h5>
              </div>

              <p className="mb-0 text-secondary ">
                We are committed to strengthening farmer-owned institutions and
                enhancing milk production, procurement, and marketing
                infrastructure to benefit millions of dairy farmers across
                India.
              </p>
            </div>

            <div
              className="card mb-4 p-4"
              style={{
                background: "#c4d5f2",
                borderRadius: "4px",
                borderLeft: "6px solid #3C82F6",
                borderRight: 0,
                borderTop: 0,
                borderBottom: 0,
              }}
            >
              <div className="d-flex align-items-start mb-2">
                <i
                  className="ri-eye-line icon-img me-2 text-primary "
                  style={{
                    fontSize: "22px",
                  }}
                ></i>
                <h5
                  className="fw-semibold mb-0"
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  Our Vision
                </h5>
              </div>
              <p className="mb-0 text-secondary">
                We provide end-to-end solutions for dairy development, including
                technical expertise, infrastructure development, training
                programs, and market linkages. Our holistic approach ensures
                sustainable growth for farmers and the dairy industry.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-5 position-relative d-flex align-items-center justify-content-center">
            <div className="image-stack position-relative w-100">
              {/* Vertical Decorative Bar */}
              <div className="vertical-bar d-none d-lg-block"></div>

              {/* Background Image */}
              <img
                src={image1}
                alt="Wind Energy Background"
                className="img-fluid shadow-sm back-image"
              />

              {/* Overlapping Front Image */}
              <img
                src={image2}
                alt="Wind Energy Front"
                className="front-image"
              />

              {/* Horizontal Decorative Bar */}
              <div className="horizontal-bar d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <img src={bgImage} alt="bg structure" className="bg-structure" />
    </div>
  );
};

export default DairyServices;
