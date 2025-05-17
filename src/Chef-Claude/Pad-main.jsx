import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"
import padsData from "./pads"
import Pad from "./Pads2"
 


export default function App({ darkMode }) {
    const [pads, setPads] = React.useState(padsData)

    function togglePad(id){ 
        //maps over the pads array
        setPads(prevPads => 
            prevPads.map(pad => 
                pad.id === id ? {...pad, on : !pad.on} : pad
            )
        )
    }


    // const buttonElements = pads.map(pad => (
    //     <Pad key={pad.id} color = {pad.color} on={pad.on}/>
    // ))

    const padElements = pads.map(pad => (
        <Pad 
            key = {pad.id}
            color = {pad.color}
            on = {pad.on}
            toggle = {() => togglePad(pad.id)}
        />
    ))


    return (
        <div>
            <div className="pad-container">
                {padElements}
            </div>
            
        </div>
    )
}

