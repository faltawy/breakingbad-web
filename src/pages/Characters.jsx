import React, { useState } from 'react'
import Character from '../components/Character'
import { api } from '../api'
import { useContext } from 'react';
import loadingContext from '../components/Contexts/loadingContext';
import { useFetch } from '../components/hooks';
import CharacterOverlay from '../components/CharacterDetailOverlay';
import { Helmet } from 'react-helmet';


function Error() {
    return (<div className='w-full text-center p-2'><h3 className='bg-red-500 text-white'>Error occured</h3></div>)
}

function Characters() {
    const { setLoading, loading } = useContext(loadingContext)
    const [data, errors] = useFetch(setLoading, api.get('/characters/'))
    const [activeChar, setActiveChar] = useState(null)
    return (
        <React.Fragment>
            <Helmet>
                <title>BreakingBad | Characters</title>
            </Helmet>
            <div className='container mx-auto flex flex-col items-start gap-2'>
                <h1 style={{opacity:data?'1':'0',transition:'opacity ease .5s'}} className='font-bold text-xl sticky top-0 right-0 z-[10] leading-tight text-primary bg-white p-1.5 rounded'>All Characters</h1>
                <div className="container mx-auto">
                    {
                        activeChar && <CharacterOverlay setActiveChar={setActiveChar} char={activeChar} />
                    }
                    {
                        data && !errors
                            ?
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center gap-5">
                                {data.map((char, index) => {
                                    return <Character setActiveChar={setActiveChar} char={char} key={index} animationDelay={index * 120 +'ms'} />
                                })}
                            </div>
                            : !loading && errors && <Error />
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Characters