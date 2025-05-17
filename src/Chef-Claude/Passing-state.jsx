import Header from "./components/Header"
import Main from "./components/Main"
import React from "react"
import Body from "./components/Body"


export default function App() {
    const [userName, setUserName] = React.useState("BOB")

    return (
        <div>
            <Header userName = {userName}/>
            <Body userName = {userName}/>
        </div>
    )
}