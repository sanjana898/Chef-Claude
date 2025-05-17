import starFilled from "/src/assets/star-filled.png"
import starEmpty from "/src/assets/star-empty.png"

import React from "react"

export default function Star(props){
    const starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <img 
            src = {starIcon}
            className="favourite"
            alt = {props.isFilled ? "filled star icon" : "empty star icon"}
            onClick={props.handleClick}
            style = {{cursor : "pointer",
                width: "30px",
                height: "30px"
            }} 
        />
    )
}