import { Routes, Route } from "react-router-dom";
import AllHome from "./Components/AllHome/AllHome";
import AllHome1 from "./Components/AllHome/AllHome1";
import AllHome2 from "./Components/AllHome/AllHome2";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import MainLayout from "./Components/Layout/MainLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import OurExperties from "./Pages/OurExperties";

function App() {
  return (
    // <Routes element={<MainLayout />}>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/home" element={<AllHome1 />} />
    //   <Route path="/home1" element={<AllHome2 />} />
    //   <Route path="/home2" element={<AllHome />} />
    //   <Route path="*" element={<PageNotFound />} />
    // </Routes>

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
