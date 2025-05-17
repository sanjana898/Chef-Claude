import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1> hello from JSX! </h1>

console.log(reactElement)

root.render(
    reactElement
)