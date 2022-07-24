import React from 'react';
import WalterWhite from '../assets/icons/walterWhite.svg';
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate = useNavigate()
    return (
        <div className='w-screen h-screen'>
            <div className='container mx-auto h-full grid place-items-center'>
                <div className='flex items-center flex-col gap-4'>
                    <h1 className='text-3xl font-bold'>404 Not Found</h1>
                    <div>
                        <img className='invert' src={WalterWhite} alt="" />
                    </div>
                    <div>
                        <button className='bg-primary text-white uppercase py-2 px-3' onClick={()=>{navigate(-1)}}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound