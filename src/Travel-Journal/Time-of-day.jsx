import { createRoot } from "react-dom/client"

function App(props){
    const hours = new Date().getHours()
    let timeOfDay

    if(hours < 12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else if(hours < 21){
        timeOfDay = "evening"
    }else{
        timeOfDay = "night"
    }

    return(
        <h1> Good {timeOfDay} </h1>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />) 