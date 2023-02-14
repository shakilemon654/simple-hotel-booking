import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import './Home.css';

const Home = () => {
   
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setHotels(data))
    }, [])

    return (
        <div className='flex justify-center'>
            <div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1024px]'>
                {
                    hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel} />)
                }
            </div>
        </div>
    );
};

export default Home;