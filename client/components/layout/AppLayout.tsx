import React from "react"
import { Props } from '@ts/types/Props'

function AppLayout(props: Props) {
    return (
        <div className='flex flex-col h-screen'>
            {props.children}
        </div>
    )
}

export default AppLayout