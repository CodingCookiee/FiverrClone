// src/pages/Home.js
import React from 'react';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/trustedBy';
import Slide from '../../components/slides/Slides';
import { cards } from '../../data.js';
import CatCard from '../../components/cateogryCard/categoryCard';

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={3}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>
        </div>
    );
};

export default Home;
