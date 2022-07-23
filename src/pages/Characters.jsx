import React from 'react'
import Character from '../components/Character'
import { api } from '../api'
import { useContext } from 'react';
import loadingContext from '../components/Contexts/loadingContext';
import { useFetch } from '../components/hooks';


function Error() {
    return (<div className='w-full text-center'><h3 className='bg-red-500 text-white'>Error occured</h3></div>)
}


function Characters() {
    const { setLoading, loading } = useContext(loadingContext)
    const [data, errors] = useFetch(setLoading, api.get('/characters/'))
    return (
        <div className='container mx-auto'>
            {
                data && !errors
                    ?
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
                        {data.map((char, index) => {
                            return <Character {...char} key={index} />
                        })}
                    </div>
                    : !loading && errors && <Error />
            }

        </div>
    )
}

export default Characters