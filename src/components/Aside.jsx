import React from 'react'
import { TbLayoutSidebarLeftExpand as Expand, TbLayoutSidebarLeftCollapse as Collapse } from 'react-icons/tb'
import { useToggle } from './hooks';
import Nav from './Nav'

function ToggleNav({ toggle, state }) {
    return <div className="text-primary hidden sm:inline-flex mb-3 text-2xl font-bolds">
        <button onClick={toggle}>
            {state
                ? <Expand />
                : <Collapse />
            }
        </button>
    </div>;
}


function Aside() {
    const [state, toggle] = useToggle(false)

    return (
        <aside className={`sm:w-[100px] z-20 ${state&&'sm:w-[50px]'} w-[50px] flex items-center flex-col sm:justify-between justify-center sticky left-0 top-0 h-full bg-transparent overflow-y-auto`}>
            <Nav state={state} />
            <ToggleNav state={state} toggle={toggle} />
        </aside>
    )
}

export default Aside