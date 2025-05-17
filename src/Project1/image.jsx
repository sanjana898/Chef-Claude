import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
    <main>
        <img src = "/src/assets/react.svg" />
        <h1>This is another element</h1>
    </main>
)
//one parent element should encapsulate all the other elements like for
//example in this case it is main

//import { createElement } from "react"
// import { createRoot } from "react-dom/client"

// const root = createRoot(document.getElementById("root"))

// root.render(
//     <main>
//         <img src = "/src/assets/react.svg" width = "100" alt = "react logo" />
//         <h1>facts</h1>
//         <ul>
//             <li>first release in 2013</li>
//             <li>created by jordan walker</li>
//             <li>over 200k stars on github</li>
//             <li>maintained by meta</li>
//             <li>powers thousands of apps</li>

//         </ul>

//     </main>
// )


