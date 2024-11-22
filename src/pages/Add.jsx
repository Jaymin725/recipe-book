import { useState } from "react";
import { Form } from "react-router-dom";

export default function Add() {
  // const [recipe, setRecipe] = useState({});

  // console.log(recipe);

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setRecipe((prevRecipe) => {
  //     const newRecipe = { ...prevRecipe };
  //     newRecipe[name] = value;
  //     return newRecipe;
  //   });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <>
      <h2>Add Recipe</h2>
      <hr />
      <section className="">
        <Form action="/recipes/new">
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
                // onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="form-control"
                required
                // onChange={handleChange}
              />
            </div>
          </section>
          <button type="submit" class="btn btn-primary mt-3">
            Add Recipe
          </button>
        </Form>
      </section>
    </>
  );
}
