import ImageHeader from "../Components/Shared/ImageHeader";
import AboutNDS from "../Components/AboutComponents/AboutNDS";
import AboutNDS1 from "../Components/AboutComponents/AboutNDS1";
import AboutNDS2 from "../Components/AboutComponents/AboutNDS2";
import BoardofDirectors from "../Components/AboutComponents/BoardofDirectors";
import "./style.css";
const About = () => {
  return (
    <>
      <ImageHeader
        title="about us"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutNDS />
      <AboutNDS1 />
      <AboutNDS2 />
      <BoardofDirectors />
    </>
  );
};

export default About;
