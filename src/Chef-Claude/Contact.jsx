import React from "react"
import avatar from "/src/assets/user.png"
import Star from "./Star"


export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    function toggleFavorite() {
        setContact(prevContact =>{
            return {
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        }
            
        )
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
                />
                <div className="info">
                   <Star 
                        isFilled = {contact.isFavorite}
                        handleClick = {toggleFavorite}
                   />

                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}