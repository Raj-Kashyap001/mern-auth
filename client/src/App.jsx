import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "../pages/Home";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Navbar from "../components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
