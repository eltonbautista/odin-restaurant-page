

export const load =  (function() {
    const body = document.querySelector('body');
    const bodyContent = document.createElement('div');
    bodyContent.setAttribute('id', 'body-content');
    body.appendChild(bodyContent);
    
    const bodyContentArray = [document.createElement('header'), document.createElement('div'),
    document.createElement('footer')];
    const [header, resoContent, footer] = bodyContentArray;

    (function pageLoad(){
        for (const element of bodyContentArray) {
        bodyContent.appendChild(element);
        }
    })();
    resoContent.setAttribute('id', 'reso-content')

    footer.textContent = '';

    const buttonLabels = ['Home', 'Menu', 'Contact Us'];
    const headerButtonArray = [];
        for (let i = 0; i < 3; i++) {
            headerButtonArray.push(document.createElement('button'));
            headerButtonArray[i].classList.add(`button${i}`)
            headerButtonArray[i].innerText = buttonLabels[i];
            header.appendChild(headerButtonArray[i]);
        }
    const [homeButton, menuButton, contactButton] = headerButtonArray;

    function homeContent() {


    const body = document.createElement('div');
    body.classList.add('tab', 'home');
    resoContent.appendChild(body);

    const homeElementsArray = [];
    ((e) => {
        for (let i = 0; i < 4; i++) {
            homeElementsArray.push(document.createElement('div'));
        } 
    })();
    const resoHoursUnorderedList = document.createElement('ul');
    resoHoursUnorderedList.textContent = 'Hours of Operation';
    const [resoName, resoDescription, resoHours, resoAddress] = homeElementsArray;

    resoName.textContent = '"The Restaurant Place"';
    resoDescription.textContent = 
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eius aperiam officiis temporibus, consectetur quia nam inventore dolore assumenda ea minus eum? Quibusdam corrupti reiciendis fugiat a eum, aspernatur vero dolorum sit dolore necessitatibus nobis sapiente laboriosam, illo, reprehenderit explicabo possimus natus quae suscipit quia quod? Quae autem eius nemo et vitae quisquam! Ducimus nostrum ipsam eos expedita corporis eius. Sed sint voluptatibus placeat odio magnam excepturi voluptas veritatis impedit.'    

    const resoHoursArray = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm',
                      'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

    let resoHoursList;
    ((e) => {
        for (let i = 0; i < 8; i++) {
            resoHoursList = document.createElement('li');
            resoHoursList.textContent = resoHoursArray[i];
            resoHoursUnorderedList.appendChild(resoHoursList);
        } 
    })();
    resoHours.appendChild(resoHoursUnorderedList);
    resoAddress.textContent = '123 Notareal Ahdres, Snotreal, Defknotreel';

    ((e) => {
        for (let i = 0; i < 4; i++) {
        body.appendChild(homeElementsArray[i])
        }
    })();
}
homeContent();

homeButton.addEventListener('click', (e) => {
    resoContent.innerText = '';
    homeContent();
})

})();

 