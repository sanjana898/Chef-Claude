import Header from "./components/Header"
import Main from "./components/Main"

import React from "react"

export default function App(){
    const [isGoingOut, setIsGoingout] = React.useState(true)

    function toggleGoingOut(){
        setIsGoingout(prevState => !prevState)
    }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out? </h1>
            <button className="value" onClick={toggleGoingOut}>
                {isGoingOut ? "yes" : "no"}
            </button>
        </main>
        
    )
}