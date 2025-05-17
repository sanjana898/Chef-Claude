import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
)

function Page() {
    return (
        <main>
        <img src = "/src/assets/react.svg" width = "100" alt = "react logo" />
        <h1>Facts:</h1>
        <ol>
            <li>react is composable</li>
            <li>it is declarative</li>
            <li>very robust</li>    
        </ol>
        </main>
    )
}