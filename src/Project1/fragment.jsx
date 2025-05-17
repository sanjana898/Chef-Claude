import { createRoot } from "react-dom/client"
import { Fragment } from "react"
const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
)

//instead of <Fragment></Fragment> we can also use <></>

function Page() {
    return ( 
        <Fragment> 
            <header>
                <img src = "/src/assets/react.svg" width = "100" alt = "react logo" />
            </header>
            <main>
                <h1>Facts:</h1>
                <ol>
                    <li>react is composable</li>
                    <li>it is declarative</li>
                    <li>very robust</li>    
                </ol>
            </main>
            <footer>
                <small>2025 Joshi development.All rights reserved</small>
            </footer>
        </Fragment>
    )
}