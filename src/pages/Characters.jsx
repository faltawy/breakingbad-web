import React, { useEffect, useState } from 'react'
import Character from '../components/Character'
import { api } from '../api'
import { useContext } from 'react';
import loadingContext from '../components/Contexts/loadingContext';


function Characters() {
    const [data, setData] = useState();
    const { setLoading } = useContext(loadingContext)
    useEffect(() => {
        setLoading(true)
        api.get('/characters/').then(response => {
            setLoading(true)
            setData(response.data)
        }).finally(e => { setLoading(false) })

    }, [])
    return (
        <div className='container mx-auto'>
            {
                data
                    ?
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
                        {data.map((char, index) => {
                            return <Character {...char} key={index} />
                        })}
                    </div>
                    : <div className='w-full text-center'><h3 className='bg-red-500 text-white'>Error occured</h3></div>
            }

        </div>
    )
}

export default Characters