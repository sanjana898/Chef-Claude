import React from "react"


export default function Pad(props){
    // const [isOn, setIsOn] = React.useState(props.on)

    // function toggle(){
    //     setIsOn(prev => !prev)
    // }


    return(
        <button 
            style = {{backgroundColor : props.color}}
            className={props.on ? "on" : null}
            onClick={props.toggle}>
        </button>
    )
}