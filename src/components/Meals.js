import React, { useState, useEffect } from 'react'
import Meal from './Meal';
import Button from '@restart/ui/esm/Button'
import {FormControl, InputGroup} from 'react-bootstrap'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [display, setDisplay] = useState([])
    useEffect(() => {
        
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setDisplay(data.meals);
            });
    }, []);

    
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedMeals = meals.filter(meal =>meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setDisplay(matchedMeals);
    }
        
   
  



    return (
        <div>
            <div>
                <InputGroup className="mb-5 w-50 m-auto ">
                    <FormControl
                        onChange={handleSearch}
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button  className="search-button" id="button-addon2">Search</Button>{''}
                </InputGroup>
            </div>
            <div className="meals-container">

                {
                    display.map(meal =><Meal key={meal.idMeal} meal ={meal} />)
                }
            </div>
        </div>
    )
}

export default Meals
