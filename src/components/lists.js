import { FaHome } from 'react-icons/fa'
import { BsFillChatSquareQuoteFill, BsFillPeopleFill } from 'react-icons/bs'
import { GiDeathSkull } from 'react-icons/gi'

export const Navigation = [
    { label: 'Home', path: '/', icon: <FaHome /> },
    { label: 'Characters', path: '/characters', icon: <BsFillPeopleFill /> },
    { label: 'Quotes', path: '/quotes', icon: <BsFillChatSquareQuoteFill /> },
    { label: 'Deaths', path: '/deaths', icon: <GiDeathSkull /> },
]