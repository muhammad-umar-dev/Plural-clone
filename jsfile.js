function myFunction() {//grap data fromweb
    const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');
    const body = document.querySelector('.main');
    menu.classList.toggle('hidden');
    body.classList.toggle('hidden');


    //add event lisiner
    // btn.addEventListener('onclick', () => {
    //     // menu.classList.toggle('hidden');
    //     console.log("Pressed");
    // });

    console.log("Pressed 1");
}