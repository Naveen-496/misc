import express from 'express';
import mongoose from 'mongoose';
import { recipeModel } from '../models/Recipes.js';
import { userModel } from '../models/Users.js';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
    const result = await  recipeModel.find({});
    res.json(result);

  } catch (error) {

    res.json(error)

  }
});

router.post("/", async (req, res) => {

  const recipe = new recipeModel(req.body);
  try {
    
    const response = await recipe.save();
    res.json(response);

  } catch (error) {

    res.json(error)

  }
});

router.put("/", async (req, res) => {

  try {
    
    const recipe = await recipeModel.findById(req.body.recipeId);
    const user = await userModel.findById(req.body.userId);
     
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({savedRecipes : user.savedRecipes});
  } catch (error) {

    res.json(error)

  }
});

router.get("/savedRecipes/ids", async (req, res) => {

  try{
  const user = await userModel.findById(req.body.userId);
  res.json({savedRecipes: user?.savedRecipes});
  }
  catch(error){
    res.json(error);
  }

});

router.get("/savedRecipes", async (req, res) => {

  try{
  const user = await userModel.findById(req.body.userId);
  const savedRecipes = await recipeModel.find({
    _id: {$in : user.savedRecipes},
  });
  res.json({savedRecipes});
  }
  catch(error){
    res.json(error);
  }

});

export {router as recipesRouter};