import React from "react";
import bgImage from "../../Images/bg-structure.png";
import icon1 from "../../Images/carbon_development.png";
import icon2 from "../../Images/lucide_milk.png";
import icon3 from "../../Images/fluent-emoji-high-contrast_man-farmer.png";
import icon4 from "../../Images/mdi_graph-line.png";
import icon5 from "../../Images/lucide_award.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const highlights = [
  {
    icon: icon1,
    value: 20,
    suffix: "+",
    title: "Producer Organization Development",
    desc: "Established over 23 Milk Producer Organizations benefiting more than 800,000 dairy farmers across India.",
  },
  {
    icon: icon2,
    value: 60,
    suffix: " Lac +",
    title: "Quality Enhancement Programs",
    desc: "Implemented quality testing and assurance systems that have improved milk quality by 40% in partner regions.",
  },
  {
    icon: icon3,
    value: 300,
    suffix: " K +",
    title: "Farmer Training Initiatives",
    desc: "Conducted 5,000+ training programs reaching over 300,000 dairy farmers with modern practices and techniques.",
  },
  {
    icon: icon4,
    value: 4900,
    suffix: " Cr+",
    title: "Economic Impact",
    desc: "Helped increase farmer incomes by an average of 35% through improved productivity and market access.",
  },
  {
    icon: icon5,
    value: 20,
    suffix: "+",
    title: "Recognition & Awards",
    desc: "Received multiple national awards for excellence in dairy development and rural empowerment.",
  },
];

const MajorHighlights = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      className="py-5 mb-5 mt-5"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "contain" }}
      ref={ref}
    >
      <div className="container-fluid text-center">
        <p
          className=""
          style={{
            color: "#004E1C",
            fontWeight: 800,
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Major Highlights
        </p>
        <p className="mb-4" style={{ color: "#1E1E1E", fontSize: "17px" }}>
          Key accomplishments and initiatives that showcase our commitment to
          dairy sector <br /> development.
        </p>
        <div
          className="row g-4 justify-content-center responsive-gap-sm"
          style={{ marginTop: "90px" }}
        >
          {highlights.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-xl-2 smallCards"
              key={index}
              // style={{
              //   minHeight: '250px'
              // }}
            >
              <div
                className="bg-white px-4 py-2 position-relative "
                style={{
                  borderRadius: "38px",
                  boxShadow: `12px 12px 20px 0px #0000001A`,
                  // border: '1px solid red',
                  height: "260px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="position-absolute top-0 start-50 translate-middle bg-white shadow 
                                d-flex align-items-center justify-content-center majorHighlitIcon"
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "-45px",
                    borderRadius: "50%",
                    zIndex: 2,
                  }}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>

                {/* Stat Number */}
                <div
                  className="text-center mb-3 position-absolute top-0 start-50 translate-middle bg-white d-flex align-items-center justify-content-center"
                  style={{
                    // marginTop: '40px',
                    minHeight: "60px",
                    width: "150px",
                    // borderRadius: "13px",
                    borderTopLeftRadius: "13px",
                    borderTopRightRadius: "13px",
                    background: "#fff",
                    // boxShadow: "0 -4px 10px -2px rgba(0, 0, 0, 0.1)",
                    boxShadow: "0 -8px 10px -6px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span
                    className="mb-0 mt-4"
                    style={{
                      fontSize: "24px",
                      lineHeight: "1.2",
                      fontWeight: 800,
                      color: "#000",
                    }}
                  >
                    {inView ? (
                      <>
                        <CountUp end={item.value} duration={2} separator="," />
                        {item.suffix}
                      </>
                    ) : (
                      <>0{item.suffix}</>
                    )}
                  </span>
                </div>

                {/* Card Content */}
                <div className="pt-2 d-flex flex-column justify-content-between card-content">
                  <div className="card-title-container">
                    <p className="card-title mb-3 responsive-margin-top mt-4">
                      {item.title}
                    </p>
                  </div>
                  <div className="card-desc-container">
                    <p className="card-desc text-muted small">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorHighlights;
