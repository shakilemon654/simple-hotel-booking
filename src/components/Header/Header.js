import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const [scrolled, setScrolled] = useState(false);

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            // Sign-out successful
            console.log('Sign-out successful');
        })
        .catch((error) => {
            // AAn error happened
            console.log('An error happned in Sign-out');
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const headerStyle = {
        backgroundColor: scrolled ? 'white' : '',
        color: scrolled ? 'black' : 'white',
        boxShadow: scrolled ? '0px 1px 1px rgb(2, 16, 42)' : ''
    }

    return (
        <div className='landing-page w-full h-screen flex flex-col'>
            <div style={headerStyle} className='w-full flex justify-between items-center px-6 py-4 fixed top-0 text-white z-30'>
                <p className='font'>User: {user.uid ? user.displayName : 'Anonymous'}</p>
                <h4 className='font text-lg'>Hotel Dubai</h4>
                <div className='flex justify-between items-center'>
                    <NavLink to='/' className='font text-base'>Home</NavLink>
                    {
                        (user && user.uid) ?
                            <NavLink onClick={handleSignOut} className='ml-8 py-3 px-4 font text-base btn-header'>Sign Out</NavLink>
                            :
                            <>
                            <NavLink to='/signin' className='ml-8 font text-base'>Sign In</NavLink>
                            <NavLink to='/register' className='ml-8 py-3 px-4 font text-base btn-header'>Register</NavLink>
                            </>
                    }
                </div>  
            </div>

            <div className='w-full h-full flex justify-center items-center -translate-y-12 z-10'>
                <h3 className='text-white text-5xl italic font-base tracking-wider leading-8'>Arabian Night Luxury</h3>
            </div>
        </div>
    );
};

export default Header;