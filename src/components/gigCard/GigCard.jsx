import React from 'react';
import { Link } from 'react-router-dom';


const GigCard = ({ item }) => {
    return (
        <Link to='/gig/123456789' className='link'>
            <div className='gig-card w-[324px] h-[400px] border border-solid border-[rgb(228, 228, 228)] mb-[40px]'>
                <img src={item.img} alt='' className='w-full h-[50%] object-cover'/>
                <div className='info p-2.5 pl-5 pr-5 flex flex-col gap-5'>
                    <div className='user flex items-center gap-2.5'>
                        <img src={item.pp} alt='' className='w-[26px] h-[26px] rounded-[50%] object-cover'/>
                        <span>{item.username}</span>
                    </div>
                    <p className='text-[#111]'>{item.desc}</p>
                    <div className='star flex items-center gap-[5px]'>
                        <img src='/star.png' alt='' className='w-[14px] h-[14px]]'/>
                        <span className='text-sm font-bold text-[#ffc108]'>{item.star}</span>
                    </div>
                </div>
                <hr className='h-0 border-[0.5px] border-solid border-[rgb(228, 228, 228)]'/>
                <div className='detail p-2.5 pl-5 pr-5 flex items-center justify-between'>
                   <img src='/heart.png' alt='' className='w-[16px] h-[16px] cursor-pointer object-cover'/>
                   <div className='price'>
                    <span className='text-[#999] text-xs'>STARTING AT</span>
                    <h2 className='text-[#555] text-lg font-normal text-end'>
                        ${item.price}
                        <sup className='text-xs font-light'>99</sup>
                    </h2>
                   </div>
                </div>
            </div>
        </Link>
    );
}

export default GigCard;
