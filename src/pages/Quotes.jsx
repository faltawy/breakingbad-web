import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { api } from '../api'
import loadingContext from '../components/Contexts/loadingContext'
import { useCopy } from '../components/hooks'
import { FaQuoteLeft } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi'
function AdvQuote({ quote }) {
    const [ref, copy, isCopid] = useCopy()
    return (
        <div onClick={copy} className={`${!isCopid && 'shadow-[0_-6px_rgba(0,0,0,0.3)_inset]'} transition-all p-3 relative overflow-hidden bg-green-200 text-primary rounded-lg`}>
            <span className='absolute -top-3 right-1 text-green-100 text-[70px] '><FaQuoteLeft /></span>
            {isCopid && <span className='absolute bottom-0 left-1/2 text-primary text-sm mb-1'><FiThumbsUp /></span>}
            <div>
                <h3 className='my-2 text-black'>{quote.author}</h3>
                <p ref={ref} className='mb-3'>
                    {quote.quote}
                </p>
            </div>
        </div>
    )
}

function Quotes() {
    const [quotes, setQuotes] = useState(null)
    const { setLoading } = useContext(loadingContext)

    useEffect(() => {
        setLoading(true)
        api.get('/quotes').then((response) => { setQuotes(response.data); }).finally(setLoading(false))
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <title>Quotes</title>
            </Helmet>

            <div className='container p-3 flex flex-col items-start gap-5'>
                <h1 className='font-bold text-xl z-[10] leading-tight text-primary bg-white p-1.5 rounded'>All Quotes</h1>
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quotes &&
                        quotes.map((quote, index) => {
                            return <AdvQuote quote={quote} key={index} />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Quotes