import React from 'react'

function Character({ name, nickname, img }) {
    return (
        <div className="rounded transition-transform hover:-translate-y-1 w-[230px] py-5 bg-green-200 shadow-lg flex items-center justify-between gap-3 flex-col cursor-pointer to-gray-50">
            <div className="flex overflow-hidden justify-center text-sm font-medium text-gray-400">
                <img alt='' loading='lazy' className="w-[200px] h-[200px] rounded-xl object-cover object-top"
                    src={img} />
            </div>
            <div>
                <h3 className='text-primary flex items-center justify-center flex-wrap gap-1'><span>{name}</span>|<span className='font-semibold'>{nickname}</span></h3>
            </div>
        </div>
    )
}

export default Character