import { Routes, Route } from "react-router-dom";
import AllHome from "./Components/AllHome/AllHome";
import AllHome1 from "./Components/AllHome/AllHome1";
import AllHome2 from "./Components/AllHome/AllHome2";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllHome />} />
      <Route path="/home" element={<AllHome1 />} />
      <Route path="/home1" element={<AllHome2 />} />
      <Route path="/home2" element={<Home />} />
    </Routes>
  );
}

export default App;
