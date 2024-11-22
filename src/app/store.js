import { configureStore } from "@reduxjs/toolkit";

import recipeReducer from "../features/recipes/recipesSlice.js";

export default configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
