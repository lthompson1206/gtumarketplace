import { useState, useEffect } from 'react';

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch('/backend/data/available-meals.json');

    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const text = await response.text();
                console.log("Raw Response:", text); // Log raw response to see what is being returned
                const meals = JSON.parse(text);
                setLoadedMeals(meals);
    
            } catch (error) {
                console.error("Failed to fetch meals:", error);
            }
        }
    
        fetchMeals();
    }, []);
    
   
    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <li key={meal.id}>{meal.name}</li>
            ))}
        </ul>
    );
}
