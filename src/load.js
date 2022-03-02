const bodyContent = document.querySelector('#body-content');

function content() {

    const bodyContentArray = [document.createElement('header'), document.createElement('div'),
    document.createElement('footer')];
    [header, resoContent, footer] = bodyContentArray;

    (function pageLoad(){
        for (const element of bodyContentArray) {
            bodyContent.appendChild(element);
        }
    })();
    
}