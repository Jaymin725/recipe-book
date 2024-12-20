import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Form } from "react-router-dom";
import { addRecipe } from "../features/recipe/recipesSlice.js";

export default function Add() {
  const [recipe, setRecipe] = useState({});
  const dispatch = useDispatch();

  console.log(recipe);

  function handleChange(event) {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => {
      const newRecipe = { ...prevRecipe };
      newRecipe[name] = value;
      return newRecipe;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addRecipe(recipe));
    setRecipe({});
  }

  return (
    <>
      <h2>Add Recipe</h2>
      <hr />
      <section className="">
        {/* <Form method="POST" action="/recipes/new"> */}
        <form onSubmit={handleSubmit}>
          <h3>Recipe Description</h3>
          <section className="row g-3">
            <div className="col-md-6">
              <label htmlFor="dishName" className="form-label">
                Dish Name
              </label>
              <input
                type="text"
                id="dishName"
                name="dishName"
                className="form-control"
                required
                onChange={handleChange}
                value={recipe.dishName || ""}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="chef" className="form-label">
                Chef
              </label>
              <input
                type="text"
                id="chef"
                name="chef"
                className="form-control"
                required
                onChange={handleChange}
                value={recipe.chef || ""}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="shortDesc" className="form-label">
                Short Description
              </label>
              <textarea
                id="shortDesc"
                name="shortDesc"
                className="form-control"
                required
                onChange={handleChange}
                value={recipe.shortDesc || ""}
              />
            </div>
          </section>
          <button type="submit" className="btn btn-primary mt-3">
            Add Recipe
          </button>
        </form>
        {/* </Form> */}
      </section>
    </>
  );
}
