import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const MainLayout = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothScrollBar:false,
      lerp: 0.1,
      duration: 1.2,
    });

    return () => {
      scroll.destroy(); // Clean up Locomotive Scroll
    };
  }, []);

  return (
    <div data-scroll-container className="bg-[#EAEAEA]">
      <main className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Navbar />
      <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
