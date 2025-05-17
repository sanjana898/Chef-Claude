import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App(){
    const entries = data.map(item => (
        <Entry 
            key = {item.id} //cant change the name "key" it gives a unique id to the list elements
            //entry = {item}
            {...item}

        />
    ))

    return (
        <main>
            <Header />
            {entries}
        </main>
    )
}