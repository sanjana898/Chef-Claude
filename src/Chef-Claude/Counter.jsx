import Header from "./components/Header"
import Main from "./components/Main"

import React from "react"

export default function App(){
    const [count, setCount] = React.useState(0)

    function add(){
        setCount(prevCount => prevCount + 1)
    }

    function subtract(){
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main>
            <h1>How many times will bob say "state" ?</h1>
            <div className="counter">
                <button className="minus" onClick = {subtract} aria-label="Decrease">-</button>
                <h2 className="count">{count}</h2>
                <button className="add" onClick={add} aria-label="Increase">+</button>
            </div>
        </main>
        
    )
}