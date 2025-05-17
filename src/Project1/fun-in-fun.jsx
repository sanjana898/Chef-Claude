import { createRoot } from "react-dom/client"
import { Fragment } from "react"
const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
)

function Page() {
    return ( 
        <>
            <Header/>
            <MainContent />
            <Footer />  
            
        </>
    )
}

function Header() {
  return (
    <header>
      <img src="/src/assets/react.svg" width="100" alt="react logo" />
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>2025 Joshi development.All rights reserved</small>
    </footer>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Facts:</h1>
      <ol>
        <li>react is composable</li>
        <li>it is declarative</li>
        <li>very robust</li>
      </ol>
    </main>
  );
}