import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../HomeComponents/Footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
