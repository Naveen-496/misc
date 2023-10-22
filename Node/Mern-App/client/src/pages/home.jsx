import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

  const[recipes, setRecipes] = useState([]);

  const[savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
     
    async function fetchRecipe(){
 
      try{

      const response = await axios.get("http://localhost:3001/recipes");
      const data = await response.data;
      console.log(data);
      setRecipes(data);

      } catch(error){
        console.error(error);
      }
    }

    fetchRecipe();
  }, []);

  const saveRecipe = async (recipeId) => {
    
    try {
       
       const response = await axios.put("http://localhost:3001/recipes", {recipeId, userId : localStorage.getItem('userId')});

      //  const result = await response.data;
      //  console.log(result);

    } catch (error) {
      console.error(error);
    }
  }

  const fetchSavedRecipes = async () => {
     
    try {
      
      const response = await axios.get('http://localhost:3001/recipes/savedRecipes/ids',{userId :localStorage.getItem('userId')});
       
        const data = await response.data;
        setSavedRecipes(data);
    } catch (error) {
      
    }
  }

  return (
    <div>     
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button type='button' onClick={() => saveRecipe(recipe._id)}> save </button>
            </div>
            <div>
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>cooking time : {recipe.cookingTime} (min)</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home