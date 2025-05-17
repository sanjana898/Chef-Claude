export default function Contact({img, name, phone, email}){
    //console.log(props)
    return(
        <div className="contacts">
        <article className="contact-card">
            <img 
                src= {img}
                alt={`Photo of ${name}`}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img 
                    src="/src/assets/phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src="/src/assets/mail-icon.png" 
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>

        </div>
    )
}


/* 
//import Header from "./components/Header"
//import Entry from "./components/Entry"
import Contact from "./Contact"


export default function App(){
    return(
        <div className="contacts">
            <Contact 
                img = "/src/assets/mr-whiskerson.png"
                name = "Mr. Whiskerson"
                phone = "(212) 555-1234"
                email = "mr.whiskaz@catnap.meow"
            />
            <Contact 
                img = "/src/assets/fluffykins.png"
                name = "Fluffykins"
                phone = "(212) 555-2345"
                email = "fluff@me.com"
            />
            <Contact 
                img = "/src/assets/felix.png"
                name = "Felix"
                phone = "(212) 555-4567"
                email = "thecat@hotmail.com"
            />
            <Contact 
                img = "/src/assets/pumpkin.png"
                name = "Pumpkin"
                phone = "(0800) CAT KING"
                email = "pumpkin@scrimba.com"
            />

        </div>
        
    )
}
*/