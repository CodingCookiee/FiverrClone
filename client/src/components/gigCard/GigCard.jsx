import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
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
                    <div className='star flex items-center gap-[5px]'>
                        <img src='/star.png' alt='' className='w-[14px] h-[14px]]'/>
                        <span className='text-sm font-bold text-[#ffc108]'>  {!isNaN(item.totalStars / item.starNumber) &&
                            Math.round(item.totalStars / item.starNumber)}</span>
                    </div>
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
