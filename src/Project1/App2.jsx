import Navbar from "./components/navbar"
import Main from "./components/main"

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Navbar />
    <Main />
    
  </>
);

export default function App2(){
    return(
        <>
            <Navbar />
            <Main />
            
        </>
    )
}