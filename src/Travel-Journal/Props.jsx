import { createRoot } from "react-dom/client"

function App(props){
    const firstName = "Joe"
    const lastName = "Schmoe"

    return(
        <h1> Hello {`${props.firstName} ${props.lastName}`} </h1>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<App firstName = "Joe" lastName = "Schmoe"/>) 