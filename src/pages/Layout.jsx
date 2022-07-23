import React, { useState } from 'react';
import BG from '../assets/images/wallpaper.jpg';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import loadingContext from '../components/Contexts/loadingContext';



function Layout() {
    const [loading, setLoading] = useState(false);

    return (
        <loadingContext.Provider value={{ loading, setLoading }}>
            <div style={{ backgroundImage: `url(${BG})`, backgroundSize: '100% 100%' }} className="w-screen flex-col flex items-center gap-5 overflow-auto bg-no-repeat h-screen bg-scroll bg-left-bottom">
                <Header loading={loading} />
                <main className='flex-1 w-full overflow-auto gap-5 p-1 flex flex-row items-start justify-between'>
                    <Aside />
                    <div className='bg-transparent flex-1 '>
                        <div className="container mx-auto border-primary">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div >
        </loadingContext.Provider>
    )


}

export default Layout