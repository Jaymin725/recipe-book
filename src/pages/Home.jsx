import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../features/recipe/recipesSlice.js";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {recipe.dishName + " "}
          <i className="text-secondary">by {recipe.chef}</i>
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`recipes/${recipe.id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

function RecipeList({ list }) {
  return (
    <div className="row g-2">
      {list.map((item) => (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
          <RecipeCard recipe={item} />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const { recipes, loading } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <>
      <h2>Recipes</h2>
      <hr />
      {loading === "pending" ? (
        <p>Loading...</p>
      ) : (
        <RecipeList list={recipes} />
      )}
    </>
  );
}
