import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients, fat, link }) => {
  return (
    <a href={link} target="_blank">
      <div className={style.recipe}>
        <h1 id="title">{title}</h1>
        <br></br>
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <br></br>
        <strong>
          <p>Calories: {calories}g</p>
          <br></br>
        </strong>
        <strong>
          <p>Fat: {fat}g</p>
        </strong>
        <img className="img" src={image} alt="" />
      </div>
    </a>
  );
};

export default Recipe;
