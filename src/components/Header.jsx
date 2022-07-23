import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Logo from './Logo'
import SearchOverlay from './SearchOverlay'


const socialLinks = [
    { path: 'https://github.com/ah7255703', icon: <FaGithub /> },
    { path: 'https://twitter.com/ah7255', icon: <FaTwitter /> },
]


function SocialLink({ icon, path }) {
    return (

        <a href={path} target='_blank' rel='noreferrer' className='bg-white p-1.5 rounded-full text-center text-primary' >
            <span>{icon}</span>
        </a>
    )
}
function Header({ loading }) {
    console.log(loading);
    return (
        <header className='w-full h-[35px] flex items-center justify-between px-1.5 bg-primary'>
            <Logo />
            <div className="flex items-center gap-1">
                {
                    socialLinks.map((link, index) => (
                        <SocialLink key={index} {...link} />
                    ))
                }
            </div>
            <div className='flex items-center justify-between gap-2'>
                <span className={`animate-spin ${!loading && 'opacity-0'} transition-all border-4 border-t-transparent border-white w-[30px] rounded-full h-[30px]`}></span>
                <SearchOverlay />
            </div>
        </header>
    )
}

export default Header