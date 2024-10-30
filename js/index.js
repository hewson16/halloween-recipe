function showRecipe() {
    // Setup checks
    const sweetIsChecked = document.getElementById('sweet-treats').checked;
    const savoryIsChecked = document.getElementById('savory-eats').checked;
    const recipeDisplay = document.getElementById('text');
    
    // Setup recipes
    const sweetRecipe = ['1', '2', '3'];
    const savoryRecipe = ['1', '2', '3'];
    
    
    if (sweetIsChecked) {
        console.log('sweet');

    } else if (savoryIsChecked) {
        console.log('savory');

    } else {
        console.log('notChosen');
        recipeDisplay.textContent = "Please select a recipe type.";
    }
}