import React from 'react';
import { Link } from 'react-router-dom';

const NotLogin = () => {
    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center' style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <div className='w-50 py-5 d-flex justify-content-center align-items-center rounded-3 flex-column' style={{
                backgroundColor: '#faedcd'
            }}>
                <img src="/not.png" alt="" width={150}/>
                <h1 className='mt-4 text-black'>You're Not Allowed!</h1>
                <h5>Please <Link to={'/login'}>Login</Link> to see our page</h5>
                <Link to={'/'}>back to home</Link>
            </div>
        </div>
    );
};

export default NotLogin;