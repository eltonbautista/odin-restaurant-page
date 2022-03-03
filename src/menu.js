

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

    const foodList = (function() {

        function menuCreator(appendTo, ...food) {
        const foodList = document.createElement('ul');
        const foodItems = [];
        for (let i = 0; i < 3; i++) {
            foodItems.push(document.createElement('li'));
            foodList.appendChild(foodItems[i]);
            foodItems[i].textContent = food[i];
        }
        appendTo.appendChild(foodList);
    }

        return {
            menuCreator,
        }
    })();

    let menuItems = {
        sides: foodList.menuCreator(menuSides, '$8 Yummy Eggs', '$12 Restaurant Wings', '$10 FeelsGood Potatoes'),
        mains: foodList.menuCreator(menuMain, '$22 Trust Me Spaghetti', 
        '$45 Over the TOP Steak', '$100 This Is The One Platter'),
        beverages: foodList.menuCreator(menuBev, '$6 "Tastes Like Water Lemonade"', '$4 Sodie Pop', '$5 Choccy Milk'),
        lorems: foodList.menuCreator(menuFiller, '$5 Lorem ipsum dolor sit amet.', '$32 Lorem Can Cook Seafood', '$13 Randomizer'),
    }; 

};