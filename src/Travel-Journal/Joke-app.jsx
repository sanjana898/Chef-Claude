import Joke from "./Joke"

export default function App(){
    return(
        <>
            <Joke 
                setup = "I got my daughter a fridge for her birthday."
                punchline = "I can't wait to see her face light up when she opens it."
                isPun = {true}
                upvotes = {10}

            />
            <Joke 
                setup = "How did the hacker escape the police?"
                punchline = "He just ransomware!"
            />
            <Joke 
                setup = "Why don't pirates travel on mountain roads?"
                punchline = "Scurvy."
            />
            <Joke 
                //setup = "Why do bees stay in the hive in the winter?"
                punchline = "It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
        
        </>
        
    )
}

//for numbers or arrays we can pass them to props in curly braces
//like {23}, {["hilarious", "old but gold"]}, isPun = {true}