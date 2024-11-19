// src/pages/Home.js
import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/trustedBy";
import Slide from "../../components/slides/Slides";
import { cards, projects } from "../../data.js";
import CatCard from "../../components/cateogryCard/categoryCard";
import Features from "../../components/features/Features";
import ProjectCard from "../../components/projectCard/ProjectCardTemp.jsx";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />

      <Slide slidesToShow={Math.min(5, cards.length)}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <Features />
      <Slide slidesToShow={Math.min(4, projects.length)}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
