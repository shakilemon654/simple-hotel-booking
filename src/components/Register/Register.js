import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {

    const { user, createUser, loading } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    if (loading) {
        return <div><h3>Loading.....</h3></div>
    }

    if (user && user.uid) {
        return <Navigate to='/' replace={true} />;
    }

    return (
        <div className='bg-form flex justify-center items-center 
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
            <form onSubmit={handleRegister} className='grid grid-cols-1 gap-y-4'>
                <h3 className='mb-1 text-center font-semibold text-2xl uppercase'>Register</h3>
                
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='email@example.com' />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confirm_password" placeholder='********' />
                </div>

                <div>
                    <button className='btn'>Register</button>
                    <span className='text-sm text-gray-500 text-center block'>
                        Already have an account? 
                        <Link to='/signin' className='underline'> Sign In</Link>
                    </span>
                </div>
            </form>   
        </div>
    );
};

export default Register;