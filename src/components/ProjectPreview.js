import "./ProjectPreview.css";
import React, { useEffect } from "react";
import config from "../config";
import ProjectCard from "./ProjectCard";

function ProjectPreview() {
  const projects = config.projects;

  useEffect(() => {
    const track = document.querySelector(".carousel-track");
    const images = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");

    let currentIndex = 0;

    function updateCarousel() {
      const imageWidth = images[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });

    return () => {
      nextButton.removeEventListener("click", () => {});
      prevButton.removeEventListener("click", () => {});
    };
  }, []);

  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      id={project.id}
      ssLocs={project.ssLocs}
      brief={project.brief}
      title={project.title}
    />
  ));
  return (
    <div className={"projectPreviewDiv"}>
      <div className="carousel caroselCard">
        <h2>Project Preview</h2>
        <div className="carousel-track">{projectCards}</div>
        <button class="carousel-button carousel-button-left">&lt;</button>
        <button class="carousel-button carousel-button-right">&gt;</button>
      </div>
    </div>
  );
}

export default ProjectPreview;
