function showRecipe() {
    // Setup radio checks
    const sweetIsChecked = document.getElementById('sweet-treats').checked;
    const savoryIsChecked = document.getElementById('savory-eats').checked;
    const drinkIsChecked = document.getElementById('drinks').checked;
    const recipeDisplay = document.getElementById('recipe-list');
    
    // Recipes
    const sweetRecipe = [
        { name: 'BOOberry Pies', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' },
        { name: 'Rice Crispy Brains', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' },
        { name: 'Mummy Cake Pops', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' }
    ];
    const savoryRecipe = [
        { name: 'Eyeball Appetizer', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' },
        { name: 'Breadstick Serpent', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' },
        { name: 'Pumpkin Baked Brie', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' }
    ];
    const drinksList = [
        { name: 'Apple Cider', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' },
        { name: 'Spirit\'s Sprite', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' },
        { name: 'Vampire Blood', url: 'https://youtu.be/dQw4w9WgXcQ?si=7fU6WT2-AAQKSU9l' }
    ];

    // Clear DOM Tree for new list
    // Not sure if this optimal, but wanted to keep with using loops and DOM Manipulation
    while (recipeDisplay.firstChild) {
        recipeDisplay.removeChild(recipeDisplay.firstChild);
    }
    
    // Radio Button check
    if (sweetIsChecked) {
        console.log('sweet');
        // for loop: add items from list to DOM
        for(let i = 0; i < sweetRecipe.length; i++) {
            const sweetItem = document.createElement("li");
            const link = document.createElement("a");
            
            link.textContent = sweetRecipe[i].name;
            link.href = sweetRecipe[i].url;
            
            sweetItem.appendChild(link);
            sweetItem.className = 'sweet';
            recipeDisplay.appendChild(sweetItem);
        }
    } else if (savoryIsChecked) {
        console.log('savory');
        // for loop: add items from list to DOM
        for(let i = 0; i < savoryRecipe.length; i++) {
            const savoryItem = document.createElement("li");
            const link = document.createElement("a");
            
            link.textContent = savoryRecipe[i].name;
            link.href = savoryRecipe[i].url;
            
            savoryItem.appendChild(link);
            savoryItem.className = 'savory';
            recipeDisplay.appendChild(savoryItem);
        }
    } else if (drinkIsChecked) {
        console.log('drinks');
        // for loop: add items from list to DOM
        for(let i = 0; i < drinksList.length; i++) {
            const drinkItem = document.createElement("li");
            const link = document.createElement("a");

            link.textContent = drinksList[i].name;
            link.href = drinksList[i].url;

            drinkItem.appendChild(link);
            drinkItem.className = "drinks";
            recipeDisplay.appendChild(drinkItem);
        }
    } else {
        console.log('notChosen');
        recipeDisplay.textContent = "Please select a recipe type.";
    }
}