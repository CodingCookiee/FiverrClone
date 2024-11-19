import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';

const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: [`gigUser_${item.userId}`], // Added unique key per user
        queryFn: () => {
            return newRequest
                .get(`/users/${item.userId}`)
                .then((res) => res.data);
        },
    });

    return (
        <Link to={`/gig/${item._id}`} className='link'>
            <div className='gig-card w-[324px] h-[450px] border border-solid border-[rgb(228, 228, 228)] mb-[40px]'>
                <img src={item.cover} alt='' className='w-full h-[50%] object-cover'/>
                <div className='info p-2.5 pl-5 pr-5 flex flex-col gap-5 '>
                {
                    isLoading ? (
                        <div className="user flex items-center gap-2.5">Loading...</div>
                    ) : error ? (
                        <div className="user flex items-center gap-2.5">Error loading user</div>
                    ) : data && (
                        <div className='user flex items-center gap-2.5'>
                            <img 
                                src={data?.img || '/avatar.png'} 
                                alt='' 
                                className='w-[26px] h-[26px] rounded-[50%] object-cover'
                            />
                            <span>{data?.username || 'Unknown User'}</span>
                        </div>
                    )
                }
                    <p className='text-[#111] text-md font-light overflow-hidden line-clamp-[3]'>{item.desc}</p>
                    {!isNaN(item.totalStars / item.starNumber) && (
                <div className="stars flex items-center gap-0.5">
                {Array(Math.round(item.totalStars / item.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img 
                            src="/star.png" 
                            alt="" 
                            key={i} 
                            className="h-[14px] w-[14px]" />
                          ))}
                  
                  <span className="text-md font-bold text-[#bdbcbc]">
                    {Math.round(item.totalStars / item.starNumber)}
                  </span>
                </div>
              )}
                </div>
                <hr className='h-0 border-[0.5px] border-solid border-[rgb(228, 228, 228)]'/>
                <div className='detail pt-2.5 pb-2.5 pl-5 pr-5 flex items-center justify-between'>
                   <img src='/heart.png' alt='' className='w-[16px] h-[16px] cursor-pointer object-cover'/>
                   <div className='price flex justify-center items-center gap-1 '>
                    <span className='text-[#999] text-xs'>STARTING AT</span>
                    <h2 className='text-[#555] text-lg font-normal text-end'>
                        ${item.price}
                    </h2>
                   </div>
                </div>
            </div>
        </Link>
    );
}

export default GigCard;
