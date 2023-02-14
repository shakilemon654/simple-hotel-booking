import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignIn.css';

const SignIn = () => {

    const { user, signIn, signInWithGoogle, loading } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((userCredential) => {
            // Signed In
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            console.log(error);
        })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.Message;
            console.log(errorCode, errorMessage);
        })
    }

    if (loading) {
        return <div><h4>Loading......</h4></div>
    }

    if (user && user.uid) {
        return <Navigate to={from} replace={true} />
    }

    return (
        <div className='bg-form flex justify-center items-center 
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
            <form onSubmit={handleSignIn} className='grid grid-cols-1 gap-y-4'>
                <h3 className='mb-1 text-center font-semibold text-2xl uppercase'>Sign In</h3>
                
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='email@example.com' />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='********' />
                </div>

                <div>
                    <button className='btn'>Sign In</button>
                    <span className='text-sm text-gray-500 text-center block'>
                        New to Hotel Dubai? 
                        <Link to='/register' className='underline'> Create an account</Link>
                    </span>
                </div>

                <div>
                    <button onClick={handleSignInWithGoogle} className='btn'>Sign In With Google</button>
                </div>
            </form>   
        </div>
    );
};

export default SignIn;