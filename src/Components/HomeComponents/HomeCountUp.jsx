import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomeCountUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // sirf ek baar trigger ho
    threshold: 0.3, // jab 30% element dikhe tab trigger
  });

  return (
    <div className="bd-counter__area pb-40" ref={ref}>
      <div className="container">
        <div className="bd-counter__border" />
        <div className="row">
          {/* Card 1 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="bd-counter__item p-relative mb-30">
              <div className="bd-counter__inner">
                <div className="bd-counter__content">
                  <span className="bd-counter__title">Projects done</span>
                  <div className="bd-counter__number">
                    {inView ? <CountUp end={2600} duration={2} /> : 0}
                    <span>+</span>
                  </div>
                </div>
                <div className="bd-counter__icon">
                  <img
                    src="assets/img/counter/counter-01.png"
                    alt="counter-icon"
                  />
                </div>
              </div>
              <p>Professional quality product</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="bd-counter__item p-relative mb-30">
              <div className="bd-counter__inner">
                <div className="bd-counter__content">
                  <span className="bd-counter__title">Expert mates</span>
                  <div className="bd-counter__number">
                    {inView ? <CountUp end={200} duration={2} /> : 0}
                    <span>+</span>
                  </div>
                </div>
                <div className="bd-counter__icon">
                  <img
                    src="assets/img/counter/counter-02.png"
                    alt="counter-icon"
                  />
                </div>
              </div>
              <p>Completed with 100% satisfaction</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="bd-counter__item p-relative mb-30">
              <div className="bd-counter__inner">
                <div className="bd-counter__content">
                  <span className="bd-counter__title">Worldwide capture</span>
                  <div className="bd-counter__number">
                    {inView ? <CountUp end={1256} duration={2} /> : 0}
                    <span>+</span>
                  </div>
                </div>
                <div className="bd-counter__icon">
                  <img
                    src="assets/img/counter/counter-03.png"
                    alt="counter-icon"
                  />
                </div>
              </div>
              <p>90% clients happy with work</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="bd-counter__item p-relative">
              <div className="bd-counter__inner">
                <div className="bd-counter__content">
                  <span className="bd-counter__title">Happy customers</span>
                  <div className="bd-counter__number">
                    {inView ? <CountUp end={8600} duration={2} /> : 0}
                    <span>+</span>
                  </div>
                </div>
                <div className="bd-counter__icon">
                  <img
                    src="assets/img/counter/counter-04.png"
                    alt="counter-icon"
                  />
                </div>
              </div>
              <p>A content farm is a company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCountUp;
