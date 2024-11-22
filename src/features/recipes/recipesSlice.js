import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipesStatus",
  async () => {
    const response = await fetch("http://localhost:3000/recipes");
    return await response.json();
  }
);

export const addRecipe = createAsyncThunk(
  "recipes/addRecipeStatus",
  async (recipe) => {
    const response = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    return await response.json();
  }
);

const initialState = {
  recipes: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      console.log(state.recipes, action.payload);
    });
    builder.addCase(addRecipe.fulfilled, () => fetchRecipes());
  },
});

export default recipesSlice.reducer;
