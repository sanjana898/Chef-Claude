import ChefLogo from "/src/assets/chef-claude-icon.png"
import React from "react"


export default function Header(props){

    

    return (
        <header>
            <img src = {ChefLogo} alt = "chef icon" />
            <h1>Chef Claude</h1>
            {/* <p>{props.userName}</p> */}
        
        </header>
    )
}