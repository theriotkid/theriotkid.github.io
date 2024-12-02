import React from 'react';
import { useNavigate } from 'react-router-dom';

const Title = () => {
    const navigate = useNavigate()
    return (
        <div className='vh-100 w-100 ms-0' style={{
            background: 'linear-gradient(0deg, #ff6a00 0%, #ee0979 100%)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'scroll',
            backgroundSize: 'cover',
        }}>
            <div className='vh-100 d-flex justify-content-center align-items-center flex-column container'>
                <h1 className='text-white fw-bolder' style={{
                    fontSize: '80px',
                    fontFamily: 'cursive'
                }}>Welcome to E=Learning TK</h1>
                <p className='text-center py-5 fs-4 font-monospace text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus impedit voluptates dolorem nesciunt atque cumque nihil reprehenderit rerum natus?</p>
                <button className='btn btn-lg btn-success fs-1 fw-bolder' style={{
                    fontFamily: 'cursive',
                }} onClick={()=> navigate('/info')}>Learn More</button>
            </div>
        </div>
    );
};

export default Title;

