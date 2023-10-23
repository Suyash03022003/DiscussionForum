import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/profile/profile";
import Question from "./components/Question/Question";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}