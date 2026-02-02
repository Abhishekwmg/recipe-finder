import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <Hero />}
      <Outlet />
    </>
  );
};

export default Home;
