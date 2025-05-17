import React from "react"

export default function Joke(props){
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevIsShown => !prevIsShown)
    }

    console.log(isShown)
    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {/* to not display 0 on the page */}
            {isShown ? <p>{props.punchline}</p> : null}  
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>

            <hr />
        </div>
    )
}