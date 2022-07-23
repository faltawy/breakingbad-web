import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoCloseCircleSharp } from 'react-icons/io5';
function SearchOverlay() {
    const [active, setActive] = useState(false)
    return (
        <div className=''>
            <div className={`${!active && 'hidden'} fixed inset-0 bg-green-100 bg-opacity-20 overflow-auto flex items-center justify-center`}>

                <div className='max-w-[60%] relative bg-primary bg-opacity-25 w-[250px] flex items-start p-3 border flex-col gap-5'>
                    <div className='absolute top-2  left-2'>
                        <button onClick={()=>{setActive(false)}} className='text-white cursor-pointer'><IoCloseCircleSharp /></button>
                    </div>
                    <div className="head text-center w-full text-white font-bold">
                        <h2>Search</h2>
                    </div>
                    <span className='w-full h-[1px] bg-slate-300 rounded-lg'></span>
                    <div className="input w-full h-[40px] overflow-hidden rounded-lg border-2 border-primary">
                        <input type="text" placeholder='search....' className='text-primary placeholder:text-primary px-2 leading-tight outline-none w-full h-full  bg-none p-0' />
                    </div>
                </div>
            </div>
            <div className="actual text-white flex items-center justify-center text-center">
                <button onClick={()=>{setActive(true)}}><FaSearch size={24} /></button>
            </div>
        </div>
    )
}

export default SearchOverlay