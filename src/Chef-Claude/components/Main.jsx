import { useState } from "react"
import Fuse from "fuse.js"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { commonIngredients } from "../commonIngredients"
import { getRecipeFromMistral, getRecipeFromMe } from "../ai"
import { ClipLoader } from "react-spinners"



export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)

    const fuse = new Fuse(commonIngredients, {threshold: 0.3})

    function handleInputChange(e){
        const value = e.target.value
        setInputValue(value)

        if(value.length > 1){
            const results = fuse.search(value).map(result => result.item)
            setSuggestions(results.slice(0,5))
        }else{
            setSuggestions([])
        }
    }

    function handleSuggestionClick(suggestion){
        setIngredients(prev => [...prev, suggestion])
        setInputValue("")
        setSuggestions([])
    }

    function handleAddClick(e){
        e.preventDefault()
        if(inputValue.trim()){
            setIngredients(prev => [...prev, inputValue.trim()])
            setInputValue("")
            setSuggestions([])
        }
    }

    // function addIngredient(formData){
    //     const newIngredient = formData.get("ingredient").toLowerCase().trim() 
    //     setIngredients(prev => [...prev, newIngredient])
    //     if(!commonIngredients.includes(newIngredient)){
    //         commonIngredients.push(newIngredient)
    //     }   
    // }

    async function getRecipe() {
        setLoading(true)
        
        setTimeout(async () => {
            //const recipeMarkdown = await getRecipeFromMistral(ingredients)
            const recipeMarkdown = await getRecipeFromMe(ingredients)
            setRecipeShown(recipeMarkdown) 
            setLoading(false)
        }, 1500)
       
        
    }

    return (
      <main>
        <form className="add-ingredient-form">
          {/* action = {addIngredient} */}
          <div className="input-wrapper">

            <input
              type="text"
              placeholder="e.g. oregano"
              aria-label="Add ingredient"
              name="ingredient"
              value={inputValue}
              onChange={handleInputChange}
              
            />
            
            {suggestions.length > 0 && (
              <ul className="suggestions">
                {suggestions.map((item, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={handleAddClick}>Add ingredient</button>
        </form>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
        )}

        {loading && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <ClipLoader color="#000" loading={loading} size={50} />
                <p>🍳 Cooking up your recipe...</p>  
          </div>
        )}

        {!loading && recipeShown && <ClaudeRecipe recipeShown={recipeShown} />}
      </main>
    );
}