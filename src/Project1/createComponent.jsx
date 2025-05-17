import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

function MainContent() { //creating a new react component 
  return(
      <h1>React is great!</h1>
  )
}

root.render(
  <div>
    <MainContent/>
  </div>
)