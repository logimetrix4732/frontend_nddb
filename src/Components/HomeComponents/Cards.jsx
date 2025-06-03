import React from "react";
import card1 from "../../Images/card1.jpg";
import card2 from "../../Images/card2.jpg";
import card3 from "../../Images/card3.png";
import servicebg from "../../assets/img/bg/service-bg.jpg";
import { Link } from "react-router-dom";

const cardsData = [
  {
    img: card1,
    icon: "assets/img/service/icon/1.png",
    title: "Premium Cattle Feed",
    description:
      "Nutritionally balanced feed for dairy cattle, enhancing milk production and animal health.",
    number: "01",
  },
  {
    img: card2,
    icon: "assets/img/service/icon/2.png",
    title: "Dairy Mineral Mixture",
    description:
      "Essential mineral supplement for dairy animals to improve overall health and productivity.",
    number: "02",
  },
  {
    img: card3,
    icon: "assets/img/service/icon/3.png",
    title: "Calf Starter Feed",
    description:
      "Specially formulated feed for calves to ensure proper growth and development.",
    number: "03",
  },
];

const Cards = () => {
  return (
    <>
      <section className="bd-serrvice__area service__bg pt-50 pb-30">
        <div className="container">
          <div className="row">
            {cardsData.map((card, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                <div className="bd-service__item-2 mb-60">
                  <div className="bd-service__thumb-2 w-img">
                    <img
                      src={card.img}
                      alt="service-thumb"
                      style={{
                        borderTopLeftRadius: "6px",
                        borderTopRightRadius: "6px",
                      }}
                    />
                  </div>
                  <div className="bd-service__content-2 transition-3">
                    <h3>
                      <Link to="/">{card.title}</Link>
                    </h3>
                    <Link className="bd-link__btn-2" to="/">
                      View Details
                    </Link>
                    <div className="bd-service__icon">
                      <span>
                        <img src={card.icon} alt="service-icon" />
                      </span>
                    </div>
                  </div>
                  <div className="bd-service__hover transition-3">
                    <div className="bd-service__overlay">
                      <div className="bd-service__icon">
                        <span>
                          <img src={card.icon} alt="service-icon" />
                        </span>
                      </div>
                      <span className="bd-service__stroke-text">
                        {card.number}
                      </span>
                      <h3>
                        <Link to="/">{card.title}</Link>
                      </h3>
                      <p>{card.description}</p>
                      <Link className="bd-link__btn-2" to="/">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
