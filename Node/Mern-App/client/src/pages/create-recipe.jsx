

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {

  const[recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients:[],
    instructions:"",
    imageUlr: "",
    cookingTime: 0,
    userOwner:localStorage.getItem('userId')

  });
  const navigate = useNavigate();

  const handleChange = (event) => {

    const{name, value} = event.target;
    setRecipe({...recipe, [name] : value});
  }
 
  const addIngredient = () => {
    setRecipe({...recipe, ingredients : [...recipe.ingredients, ""]});

  }

  const handleIngredientChange = (event, idx) => {
     
    const { value } = event.target;
    const ingredients = recipe.ingredients;
      ingredients[idx] = value;
    setRecipe({...recipe, ingredients});
  }
 // console.log(recipe);

 const onSubmit = async (event) => {

   event.preventDefault();

    const response = await axios.post("http://localhost:3001/recipes", recipe);
    console.log(response.data);
   alert('recipe created successfully...');
   navigate('/');
   
   try {
    
   } catch (error) {
     console.error(error);
   }
 }
  return (
    <div className='create-recipe'>
      <h2>Create Recipe</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="name"> Name: </label>
        <input type="text" id='name' name='name' onChange={handleChange} />
        <label htmlFor="description"> description</label>
        <textarea name="description" id="description"onChange={handleChange}  ></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, idx) => (
          <input type="text"
          key={idx}
          name="ingredients"
          value={ingredient}
          onChange={(event) => handleIngredientChange(event, idx)} />
        ))}
         <button type='button' onClick={addIngredient}>Add Ingredient</button>
        <label htmlFor="instructions"> instructions</label>
        <textarea name="instructions" id="instructions" onChange={handleChange} ></textarea>
        <label htmlFor="image">imageUrl:</label>
        <input type="text" name='imageUrl' id='imageUrl' onChange={handleChange} />

        <label htmlFor="cookingTime">cooking time (minutes)</label>
        <input type="number" id='cookingTime' name='cookingTime' onChange={handleChange} />

        <button type='submit'>create recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;