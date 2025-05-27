import { Routes, Route } from "react-router-dom";
import AllHome from "./Components/AllHome/AllHome";
import AllHome1 from "./Components/AllHome/AllHome1";
import AllHome2 from "./Components/AllHome/AllHome2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllHome />} />
      <Route path="/home" element={<AllHome1 />} />
      <Route path="/home1" element={<AllHome2 />} />
    </Routes>
  );
}

export default App;
