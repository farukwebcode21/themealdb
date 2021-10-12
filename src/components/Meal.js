import React from 'react'

const Meal = (props) => {
    // console.log(props.meal);
    const {strMeal, strArea, strMealThumb, strInstructions, strCategory} = props.meal;
    return (
        <div>
            <div className="single-meal">
                <img src={strMealThumb} alt=""/>
                <h3>{strMeal}</h3>
                <p>{strArea}</p>
                <h4>{strCategory}</h4>
                <p>{strInstructions.slice(0, 200)}</p>
            </div>
        </div>
    )
}

export default Meal
