import React from 'react';
import { gigs } from '../../data.js';
import GigCard from '../../components/gigCard/GigCard.jsx';
import { useRef, useState } from 'react';


const Gigs = () => {
    const [sort, setSort] = useState('sales')
    const [open, setOpen] = useState(false)
    const minRef = useRef()
    const maxRef = useRef()

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }

    const apply = () => {
        console.log(minRef.current.value)
        console.log(maxRef.current.value)
    }

    return (
        <div className='gigs'>
        <div className='container'>
            <span className='breadcrumbs'>Fiverr > Graphics & Design ></span>
            <h1>AI Artists</h1>
            <p>
          Explore the boundaries of art and technology with fiverr's AI artists
        </p>
        <div className='menu'>
            <div className='left'>
            <span>Budget</span>
            <input ref={minRef} type='number' placeholder='min'/>
            <input ref={maxRef} type='number' placeholder='max'/>
            <button onClick={apply}>Apply</button>
            </div>
            <div className='right'>
                <span>Sort by</span>
                <span className='sortType'>
                 {sort === 'sales' ? 'Best Selling' : 'Newest'}
                </span>
                <img src='/down.png' alt='' onClick={() => setOpen(!open)}/>
                {open && (
                    <div className='rightMenu'>
                    { sort === 'sales' ? (
                        <span onClick={() => reSort('createdAt')}>Newest</span>
                    ) : (
                        <span onClick={() => reSort('sales')}>Best Selling</span>
                    )}
                    <span onClick={() => reSort('sales')}>Popular</span>
                    </div>
                )}
            </div>
        </div>
        <div className='cards'>
        {gigs.map((gig) => (
                <GigCard item={gig} key={gig.id}/>
            ))}
        </div>
        </div>
        </div>
    );
}
export default Gigs;
