import Header from "./components/Header"
import Main from "./components/Main"

import React from "react"

export default function App(){
    
    const [myFavouriteThings, setMyFavouriteThings] = React.useState([])
    const allFavouriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    
    const thingsElements = myFavouriteThings.map(thing => 
        <p key ={thing}>
            {thing}
        </p>)

    function addFavouriteThing(){
        setMyFavouriteThings(prevFavThings => [...prevFavThings, "test"])
    }
    
    return (
        <main>
            <button onClick={addFavouriteThing}>Add item</button>
            <section aria-live = "polite">
                {thingsElements}
            </section>
        </main>
        
    )
}