function showRecipe() {
    // setup checks
    const sweetIsChecked = document.getElementById('sweet-treats').checked;
    const savoryIsChecked = document.getElementById('savory-eats').checked;
    
    // setup recipes
    let sweetRecipe = ['1', '2', '3'];
    let savoryRecipe = ['1', '2', '3'];
    const showRecipe = document.getElementById('text');
    

    if(sweetIsChecked) {
        console.log('sweet');
        

    }
    else if (savoryIsChecked)
    {  
        console.log('savory');
    }
    else {
        console.log('notChosen');
        text.textContent = "not chosen";
    }
}