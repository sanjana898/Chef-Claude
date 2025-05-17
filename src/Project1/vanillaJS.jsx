import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

const h1 = document.createElement("h1")

h1.textContent = "react is great!"

h1.className = "header"

document.getElementById("root").appendChild(h1)
//cant use root for vanilla js
