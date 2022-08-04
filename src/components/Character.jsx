import React from 'react'

function Character({ char, setActiveChar,animationDelay }) {
    return (
        <div style={{animationDelay:animationDelay}} onClick={() => { setActiveChar(char) }} className="rounded transition-transform show_char hover:-translate-y-1 w-[230px] py-5 bg-green-200 shadow-lg items-center justify-between gap-3 flex-col cursor-pointer to-gray-50">
            <div className="flex overflow-hidden justify-center text-sm font-medium text-gray-400">
                <img alt='' loading='lazy' className="w-[200px] h-[200px] rounded-xl object-cover object-top"
                    src={char.img} />
            </div>
            <div>
                <h3 className='text-primary flex items-center justify-center flex-wrap gap-1'><span>{char.name}</span>|<span className='font-semibold'>{char.nickname}</span></h3>
            </div>
        </div>
    )
}

export default Character