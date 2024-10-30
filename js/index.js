function showRecipe() {
    // setup recipes
    const sweetIsChecked = document.getElementById('sweet-treats').checked;
    const savoryIsChecked = document.getElementById('savory-eats').checked;
    const showRecipe = document.getElementById('show-recipe');
    

    if(sweetIsChecked) {
        console.log('sweet');

    }
    else if (savoryIsChecked)
    {  
        console.log('savory');
    }
    else {
        console.log('notChosen');
    }






}