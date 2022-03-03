

export function menu() {

    const body = document.createElement('div');
    body.classList.add('tab', 'menu');
    content.resoContent.appendChild(body);

    const menuElements = [];
    for (let i = 0; i < 6; i++) {
        menuElements.push(document.createElement('div'));
        if(i < 4) {
            menuElements[i].classList.add('food', `${i}`);    
        }
        body.appendChild(menuElements[i]);
    };
    [menuSides, menuMain, menuBev, menuFiller, menuMenu, menuResoName] = menuElements;
    // Each of our food items will be a list of 3 foods. We want a list that we can reuse. 
    const foodList = document.createElement('ul');
    const foodItems = []; // using const here because we want to preserve the value of foodItems being an array of <li>.
    for (let i = 0; i < 3; i++) {
        foodItems.push(document.createElement('li'));
        foodList.appendChild(foodItems[i]);
    }
    // now we have an array of li. Changing the values of those indices will affect the contents of the array
    // but ultimately our foodList should be a list of food items.  

    
};