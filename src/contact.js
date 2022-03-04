
export const contact = (function() {
    const contactButton = document.querySelector('.button2')
    const bodyContent = document.querySelector('#reso-content');

    function generate() {
    const body = document.createElement('div');
    body.classList.add('tab', 'contact')
    bodyContent.appendChild(body);

    let contactArray = [];
    for (let i = 0; i < 3; i++) {
        contactArray.push(document.createElement('div'));
        contactArray[i].classList.add('person', `${i}`);
        body.appendChild(contactArray[i]);
    }

    contactArray[0].textContent = 'Person Incharge';
    contactArray[1].textContent = 'Secondper Sonincharge';
}

    contactButton.addEventListener('click', (e) => {
        bodyContent.innerText = '';
        generate();
    })
})();