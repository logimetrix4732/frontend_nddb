import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const counters = [
  {
    id: 1,
    title: "States Covered",
    end: 9,
    suffix: "",
    description: "Presence across Indian states",
    icon: "assets/img/counter/counter-01.png",
  },
  {
    id: 2,
    title: "Districts Covered",
    end: 147,
    suffix: "",
    description: "Extensive district-wise reach",
    icon: "assets/img/counter/counter-02.png",
  },
  {
    id: 3,
    title: "Villages Covered",
    end: 22.8,
    suffix: "K",
    description: "Empowering rural communities",
    icon: "assets/img/counter/counter-03.png",
  },
  {
    id: 4,
    title: "Associated Dairy Farmers",
    end: 9.5,
    suffix: "L",
    description: "Strong farmer participation",
    icon: "assets/img/counter/counter-04.png",
  },
];

const HomeCountUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bd-counter__area pb-40" ref={ref}>
      <div className="container">
        <div className="bd-counter__border" />
        <div className="row">
          {counters.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 mb-30">
              <div className="bd-counter__item p-relative">
                <div className="bd-counter__inner">
                  <div className="bd-counter__content">
                    <span
                      className="bd-counter__title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <img
                        src={item.icon}
                        alt="counter-icon"
                        style={{ width: "auto", height: "30px" }}
                      />
                      {item.title}
                    </span>
                    <div className="bd-counter__number">
                      {inView ? (
                        <CountUp
                          end={item.end}
                          duration={2}
                          decimals={item.end % 1 !== 0 ? 1 : 0}
                        />
                      ) : (
                        0
                      )}
                      <span>{item.suffix}</span>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: "-12px" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCountUp;
