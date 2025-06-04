import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import kamleshSir from "../../assets/img/team/board_director/K.R.Trivedi.jpg";
import DevanandSir from "../../assets/img/team/board_director/Devanand-sir.jpg";
import RajivSir from "../../assets/img/team/board_director/Rajeev-Krishnan-sir.jpg";
import RaghupatiSir from "../../assets/img/team/board_director/Photo-S-Regupathi-scaled.jpg";
import VijaySir from "../../assets/img/team/board_director/Shri-T.M.-Vijay-Bhaskar.jpg";
import ManishSir from "../../assets/img/team/board_director/Manish-Bandlish-sir.jpg";
import DurgaShankarSir from "../../assets/img/team/board_director/durga-shankar-mishra.jpeg";
import AlkaMam from "../../assets/img/team/board_director/Dr-Alka-Mahajan-003.jpg";
import AbhijitSir from "../../assets/img/team/board_director/Abhijit-sir-1.jpg";
import MeeneshSir from "../../assets/img/team/board_director/Chairman-Sir-01.jpg";

const teamMembers = [
  {
    name: "Shri Kamlesh Trivedi",
    title: "Founder",
    img: kamleshSir,
    description: "Shri Kamlesh Trivedi has received a bachelor’s degree in Veterinary Sciences from Ana.",
  },
  {
    name: "Dr. C. P. Devanand",
    title: "Managing Director, NDDB Dairy Services",
    img: DevanandSir,
    description: "Dr. C. P. Devanand, an alumnus of College of Veterinary & Animal Sciences, Kerala.",
  },
  {
    name: "Dr. Rajeev Krishnan",
    title: "Executive Director",
    img: RajivSir,
    description: "Dr. Rajeev Krishnan has done his Post Graduate Diploma in Agri-Business Management.",
  },
  {
    name: "Shri S Regupathi",
    title: "Executive Director Operations",
    img: RaghupatiSir,
    description: "Shri S Regupathi has over three decades of experience in finance and accounting.",
  },
  {
    name: "Shri T.M. Vijay Bhaskar",
    title: "Retired IAS",
    img: VijaySir,
    description: "An Indian Administrative Service officer of the 1983 batch with 39 years of service.",
  },
  {
    name: "Shri Manish Bandlish",
    title: "MD, Mother Dairy Fruit & Vegetable Pvt Ltd",
    img: ManishSir,
    description: "An Engineering Graduate from Jamia Millia Islamia and an IIM Lucknow alumnus.",
  },
  {
    name: "Shri. Durga Shanker Mishra",
    title: "",
    img: DurgaShankarSir,
    description: "Durga Shanker Mishra, a 1984 batch IAS officer, served in various key government roles.",
  },
  {
    name: "Dr. Alka Mahajan",
    title: "",
    img: AlkaMam,
    description: "Dr. Alka Mahajan is a seasoned academic with 35+ years of teaching and leadership.",
  },
  {
    name: "Shri Abhijeet Bhattacharjee",
    title: "General Manager",
    img: AbhijitSir,
    description: "Shri Abhijeet Bhattacharjee is a Postgraduate in Rural Management with a law degree.",
  },
  {
    name: "Shri Meenesh Shah",
    title: "Chairman, NDDB",
    img: MeeneshSir,
    description: "A dynamic professional with over 30 years of experience in the Dairy sector.",
  },
];

const Team = () => {
  return (
    <section className="bd-team__area pb-90">
      <div className="team__style-2">
        <div className="container">
          <h1 className="text-center mb-5">Board of Directors </h1>

          <Swiper
            modules={[Autoplay]} // only Autoplay
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bd-team__item team-card mb-30">
                  <div className="bd-team__img w-img">
                    <a href="team-details.html" >
                      <img src={member.img} alt={member.name} style={{ borderRadius: '50%'}} />
                    </a>
                    <div className="bd-team__social-wrapper">
                      <button className="bd-team__plus-btn">
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="bd-team__social-link">
                        <a className="social-link-1" href="#"><i className="fa-brands fa-twitter" /></a>
                        <a className="social-link-2" href="#"><i className="fa-brands fa-youtube" /></a>
                        <a className="social-link-3" href="#"><i className="fa-brands fa-facebook-f" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="bd-team__content">
                    <h3><a href="team-details.html">{member.name}</a></h3>
                    <span>{member.title}</span>
                    <p>{member.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
