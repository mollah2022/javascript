import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashBoard from "../pages/DashBoard";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import Error from "../pages/Error"; // ✅ import করতে হবে

const RouterPage = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPage;
