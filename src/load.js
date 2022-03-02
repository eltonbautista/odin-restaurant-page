export const bodyContent = document.querySelector('#body-content');

export function content() {

    const bodyContentArray = [document.createElement('header'), document.createElement('div'),
    document.createElement('footer')];
    const [header, resoContent, footer] = bodyContentArray;

    (function pageLoad(){
        for (const element of bodyContentArray) {
        bodyContent.appendChild(element);
        }
    })();

    footer.textContent = 'Footer'

    const headerButtonArray = [];
    ((e) => {
        for (let i = 0; i < 3; i++) {
            headerButtonArray.push(document.createElement('button'));
        }
    })();

    const [homeButton, menuButton, contactButton] = headerButtonArray;
    const buttonLabels = ['Home', 'Menu', 'Contact Us'];

    ((e) => {
        for (let i = 0; i < 3; i++) {
            headerButtonArray[i].innerText = buttonLabels[i];
            header.appendChild(headerButtonArray[i]);
        };
    })();

// ------------------------------------------------------------

    const body = document.createElement('div');
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

    resoName.textContent = 'The Restaurant Place';
    resoDescription.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, enim officia. Porro voluptatibus libero animi?'
    
    
    

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
    resoAddress.textContent = '123 Notareal Address, Notreal, Knotreel';

    ((e) => {
        for (let i = 0; i < 4; i++) {
        body.appendChild(homeElementsArray[i])
        }
    })();
};







// export function homeContent() {


//     const body = document.createElement('div');
//     header.append(body);

//     const homeElementsArray = [];
//     ((e) => {
//         for (let i = 0; i < 4; i++) {
//             homeElementsArray.push(document.createElement('div'));
//         }
//     })();
    
//     const [resoName, resoDescription, resoHours, resoAddress] = homeElementsArray;

//     resoName.textContent = 'The Restaurant Place';
//     resoDescription.textContent = 
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, enim officia. Porro voluptatibus libero animi?'
    
//     const resoHoursUnorderedList = document.createElement('ul');
    

//     resoHoursArray = ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm',
//                       'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm'];

//     let resoHoursList;
//     ((e) => {
//         for (let i = 0; i < 8; i++) {
//             resoHoursList = document.createElement('li');
//             resoHoursList.textContent = resoHoursArray[i];
//             resoHoursUnorderedList.appendChild(resoHoursList);
//         }
//     })();

//     resoHours.appendChild(resoHoursUnorderedList);

//     resoAddress.textContent = '123 NotAReal Address, NotReal, Knotreel'
// }; 