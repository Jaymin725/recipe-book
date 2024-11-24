import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipe/fetchRecipesStatus",
  async () => {
    const response = await fetch("http://localhost:3000/recipes");
    return await response.json();
  }
);

export const addRecipe = createAsyncThunk(
  "recipe/addRecipeStatus",
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
  loading: "idle",
};

export const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.recipes = action.payload;
    });
    builder.addCase(
      fetchRecipes.rejected,
      (state, action) => (state.loading = "failed")
    );

    builder.addCase(addRecipe.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.loading = "successful";
      state.recipes.push(action.payload);
    });
  },
});

export default recipesSlice.reducer;
