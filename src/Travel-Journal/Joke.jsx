export default function Joke({setup, punchline}) {
    return(
        <div className="joke">
            {setup && (
                <>
                    <h3>Setup:</h3>
                    <p>{setup}</p>
                </>
            )}
            <h3>Punchline:</h3>
            <p>{punchline}</p>
            
        </div>
    )
}

/* 
<article className="joke setup and punch">
                <h3>Setup:</h3>
                <p>{setup}</p>
                <h3>Punchline:</h3>
                <p>{punchline}</p>
</article>
*/