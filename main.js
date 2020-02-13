const spnText = document.querySelector('.text');
const txt = "lorem ipsum kdsadkjcdjmhfgdsakhmgmia sdjfajdksfklksa jkjsdasfjkjfdsa";
let indexTxt = 0;
const time = 50;


const addLetter = () => {
    spnText.textContent += txt[indexTxt];
    indexTxt++

    if (indexTxt === txt.length) {
        clearInterval(indexTyping);
    }
};


const indexTyping = setInterval(addLetter, time);


