import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import MainLayout from "./Components/Layout/MainLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import OurExperties from "./Pages/OurExperties";
import CarrerPage from "./Pages/CarrerPage";
import MilkProducerOrg from "./Pages/MilkProducerOrg";
import SemenStation from "./Pages/SemenStation";
import NewInitiative from "./Pages/NewInitiative";
import Publications from "./Pages/Publications";
import Tenders from "./Pages/Tenders";
import LoginPage from "./Pages/AdminLogin";

import AdminPost from "./Admin/AdminPost";
import AdminDashboard from "./Admin/AdminDashboard";
import RequireAuth from "./Auth/RequireAuth";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    const isFirstLoad = useRef(true);

    useEffect(() => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/our-experties" element={<OurExperties />} />
        <Route path="/CarrerPage" element={<CarrerPage />} />
        <Route path="/CarrerPage/:id" element={<CarrerPage />} />
        <Route path="/milk-producer-org" element={<MilkProducerOrg />} />
        <Route path="/semen-station" element={<SemenStation />} />
        <Route path="/new-initiative" element={<NewInitiative />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/adminlogin" element={<LoginPage />} />
        <Route
          path="/adminPost"
          element={
            <RequireAuth>
              <AdminPost />
            </RequireAuth>
          }
        />
        <Route
          path="/adminDashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
