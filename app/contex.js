"use client"
import React, { useState } from 'react'
import { createContext } from 'react'

export const CreateCntx = createContext(null);

const CentralisedData = (props) => {

    const [data, setData] = useState("data centralised hai")
    const [ search ,setSearch ] = useState("Search kr bsdk")

    return (
        <CreateCntx.Provider value={[data, setData] } >
            <h1>{props.children}</h1>
        </CreateCntx.Provider >




    )
}

export default CentralisedData