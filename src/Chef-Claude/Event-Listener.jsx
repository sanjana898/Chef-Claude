// import Header from "./components/Header"
// import Main from "./components/Main"

export default function App(){

    function handleClick(){
        console.log("I was clicked")
    }

    function handleMouseOver(){
        console.log("mouse is hovering over the pic")
    }

    return (
        <main>
            <img
                src="https://picsum.photos/640/360"
                alt="Placeholder image from Picsum"
                onMouseOver={handleMouseOver}
            />
            <button onClick={handleClick}>Click me</button>
        </main>
        
    )
}