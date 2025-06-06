import Dashboard from "../Components/Dashboard";
import Cards from "../Components/HomeComponents/Cards";
import DairyServices from "../Components/HomeComponents/DairyServices";
import MajorHighlights from "../Components/HomeComponents/MajorHighlights";
import SocialMedia from "../Components/HomeComponents/SocialMedia";
import SuccessStories from "../Components/HomeComponents/SuccessStories";
import "./style.css";
const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Dashboard />
      <DairyServices />
      <SuccessStories />
      <Cards />
      <MajorHighlights />
      <SocialMedia />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
