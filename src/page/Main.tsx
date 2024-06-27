import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/templates/Banner";
import ProjectWork from "../components/templates/ProjectWork";
import Header from "../components/templates/Header";
import Contest from "../components/templates/Contest";
const Main: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const contentsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        console.log(entry.target);
        if (entry.isIntersecting) {
          if (entry.target === bannerRef.current) {
            navigate("/Portfolio");
          } else if (entry.target === projectRef.current) {
            navigate("/Portfolio/project");
          } else if (entry.target === contentsRef.current) {
            navigate("/Portfolio/contest");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-10px 0px 0px 0px",
      threshold: 0.3,
    });

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (contentsRef.current) observer.observe(contentsRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
      if (projectRef.current) observer.unobserve(projectRef.current);
      if (contentsRef.current) observer.unobserve(contentsRef.current);
    };
  }, [navigate]);

  return (
    <div className="">
      <div className="h-[100vh] w-full bg-black/0 peer-hover:bg-black/60 peer">
        <Header />
        <div id="banner" ref={bannerRef}>
          <Banner />
        </div>
        <div id="work1" ref={projectRef}>
          <ProjectWork />
        </div>
        <div id="contest" ref={contentsRef}>
          <Contest />
        </div>
      </div>
    </div>
  );
};

export default Main;
