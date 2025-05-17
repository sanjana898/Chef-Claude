import Header from "./components/Header"
import Main from "./components/Main"

import React from "react"

export default function App(){
    const isGoingOut = true

    //let answer = isGoingOut ? "Yes" : "No"

    return (
        <main>
            <h1 className="title">Do I feel like going out ?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button> 
            {/* can also write {answer} */}
        </main>
        
    )
}