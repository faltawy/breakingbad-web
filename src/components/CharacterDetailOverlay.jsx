import { useContext } from "react"
import { api } from "../api"
import loadingContext from "./Contexts/loadingContext"
import { useFetch } from "./hooks"
import { IoIosClose } from 'react-icons/io'


function Quote({ quote }) {
    return (
        <div className='p-1'>
            <p className='leading-relaxed text-lg font-semibold'>{quote}</p>
        </div>)
}


export default function CharacterOverlay({ char, setActiveChar }) {
    const { setLoading } = useContext(loadingContext)
    const [quotes] = useFetch(setLoading, api.get(`/quote?author=${char.name}`))

    return (
        <div className='fixed z-40 inset-0 w-screen h-screen p-5 bg-white overflow-auto'>
            <button onClick={() => { setActiveChar(null) }} className='right-3 absolute top-2 p-2 text-xl opacity-25 hover:opacity-100 transition-all rounded-full bg-green-600 text-white'><IoIosClose /></button>
            <div className="card max-w-full min-w-fit sm:min-w-[500px] flex items-center flex-col max-h-screen min-h-0 gap-3">
                <div className="justify-between border p-3 w-full flex gap-2 flex-row items-center">
                    <div className="flex flex-row items-center gap-3">
                        <div className="w-[90px] h-[90px] object-cover relative rounded-full overflow-hidden">
                            <img src={char.img} className='w-full h-full absolute top-0 left-0' alt={char.name} />
                        </div>
                        <div className='flex flex-col my-auto items-start justify-between gap-3 h-full'>
                            <h3>{char.name}</h3>
                            <span>({char.nickname})</span>
                        </div>
                    </div>

                    <div>
                        <span>{char.status}</span>
                    </div>
                </div>
                <div className="body border w-full">
                    {quotes?.length > 0 &&
                        <div className="quotes flex gap-1 flex-col items-start p-3">
                            <h3 className='p-2 text-2xl font-bold text-primary'>Quotes</h3>
                            <div className='flex items-start flex-col gap-2'>
                                {quotes.map((q, index) => { return <Quote {...q} key={index} /> })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
