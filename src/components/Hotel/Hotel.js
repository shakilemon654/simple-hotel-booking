import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hotel = ({hotel}) => {

    const {hotelName, image, description, pricePerNight, people, review, id} = hotel;

    const navigate = useNavigate();
    const handleBookNow = () => {
        const path = `/booking/${id}`;
        navigate(path)
    }

    return (
        <div className='border border-gray-400 rounded flex flex-col justify-between'>
            <div className='px-2 pt-2'>
                <img className='rounded' src={image} alt='' />
                <div className='m-2 grid grid-cols-1 gap-y-2'>
                    <h4 className='font-semibold text-lg tracking-wide uppercase'>{hotelName}</h4>
                    <div className='my-3'>
                        <p className='text-md'>{description}</p>
                    </div>
                    <p className='text-sm'>Price: {pricePerNight}/night</p>
                    <p className='text-sm'>People: {people}</p>
                    <p className='text-sm'>Review: {review}</p>
                </div>
            </div>
            <button onClick={handleBookNow} className='btn'>Book Now</button>
        </div>
    );
};

export default Hotel;