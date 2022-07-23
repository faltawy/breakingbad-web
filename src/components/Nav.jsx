import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation } from './lists'


function NavItem({ label, path, icon, state }) {
    return (
        <NavLink to={path} className='text-white flex items-center justify-center flex-col-reverse bg-green-400 transition-all bg-opacity-90 hover:bg-opacity-50 w-full rounded-xl sm:rounded-md p-2'>

            {
                !state && <span className='font-bold hidden sm:inline-flex text-sm'>{label}</span>
            }
            <i className='text-xl'>{icon}</i>
        </NavLink>)
}

function Nav({ state }) {
    return (
        <nav className='gap-4 flex items-center w-full flex-col p-1'>
            {
                Navigation.map((item, index) => {
                    return <NavItem {...item} state={state} key={index} />
                })
            }
        </nav>
    )
}

export default Nav