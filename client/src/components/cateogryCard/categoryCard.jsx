import React from 'react';
import { Link } from 'react-router-dom';


const CatCard = ({ card }) => {
    return (
        <Link to='/gigs'>
            <div className='catCard h-[344px] w-[252px] text-white
             rounded-sm relative cursor-pointer'>
                <img src={card.img} alt={card.title}  className='w-full h-full object-cover'/>
                <span className='desc font-light absolute top-[15px] left-[15px]'>{card.desc}</span>
                <span className='title absolute top-[40px] left-[15px] text-[24px] font-medium'>{card.title}</span>
            </div>
        </Link>
    );
}

export default CatCard;
