function showRecipe() {
    // Setup radio checks
    const sweetIsChecked = document.getElementById('sweet-treats').checked;
    const savoryIsChecked = document.getElementById('savory-eats').checked;
    const recipeDisplay = document.getElementById('recipe-list');
    
    // Recipes
    const sweetRecipe = ['BOOberry Pies', 'Rice Crispy Brains', 'Mummy Cake Pops'];
    const savoryRecipe = ['Eyeball Appetizer', 'Breadstick Serpent', 'Pumpkin Baked Brie'];

    // Clear DOM Tree for new list
    // Not sure if this optimal, but wanted to keep with using loops and DOM Manipulation
    while (recipeDisplay.firstChild) {
        recipeDisplay.removeChild(recipeDisplay.firstChild);
    }
    
    // Radio Button check
    if (sweetIsChecked) {
        console.log('sweet');
        
        // for loop: add items from list to DOM
        for(var i = 0; i < sweetRecipe.length; i++) {
            const sweetItem = document.createElement("li");
            sweetItem.textContent = sweetRecipe[i];
            recipeDisplay.appendChild(sweetItem);
        }

        // change text color
        recipeDisplay.className = 'sweet';

    } else if (savoryIsChecked) {
        console.log('savory');

        // for loop: add items from list to DOM
        for(var i = 0; i < savoryRecipe.length; i++) {
            const savoryItem = document.createElement("li");
            savoryItem.textContent = savoryRecipe[i];
            recipeDisplay.appendChild(savoryItem); 
        }
        
        // change text color
        recipeDisplay.className = 'savory';

    } else {
        console.log('notChosen');
        recipeDisplay.textContent = "Please select a recipe type.";
    }
}