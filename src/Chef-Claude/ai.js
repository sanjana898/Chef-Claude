import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a 
recipe they could make with some or all of those ingredients. You don't need to use every 
ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`


const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)


export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}

export async function getRecipeFromMe(ingredients){
    return "Hi we are working on a recipe!"
}

// export async function getRecipeFromMistral(ingredients) {
//     const HF_TOKEN = process.env.HF_ACCESS_TOKEN
//     const ingredientsString = ingredients.join(", ")

//     try {
//         const response = await fetch("https://api-inference.huggingface.co/v1/chat/completions", {
//             method: "POST",
//             headers: {
//                 "Authorization": `Bearer ${HF_TOKEN}`,
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//                 messages: [
//                     { role: "system", content: "You are an assistant that..." }, // your SYSTEM_PROMPT here
//                     { role: "user", content: `I have ${ingredientsString}. What recipe can I make?` }
//                 ],
//                 max_tokens: 1024
//             })
//         })

//         const data = await response.json()
//         return data.choices?.[0]?.message?.content
//     } catch (error) {
//         console.error("Error fetching recipe:", error)
//     }
// }
