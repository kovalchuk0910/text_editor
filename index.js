const buttons = document.querySelectorAll('.btn');
const content = document.querySelector('.content');

const fontSizeUp = document.querySelector('.fontSizeUp');
const fontSizeDown = document.querySelector('.fontSizeDown');

const fontsizeSpan = document.querySelector('.fontsize span');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        let command = e.target.getAttribute('data');

        if(command === "createLink" || command === "insertImage") {
            let url = prompt("Link: ", "http://");
            document.execCommand(command, false, url);
        } else {
            document.execCommand(command, false, null);
        }
    })
}


let font = "";
let fontSize = 18;

function updateFont() {
    let selectFont = document.querySelector('#select_font');
    font = selectFont.options[selectFont.selectedIndex].value;
    
    content.style = 'font-family:' + font + ";";
}
updateFont();

function updateFontSizeSpan() {
    fontsizeSpan.innerHTML = "";
    fontsizeSpan.innerHTML = fontSize + "px";
}
updateFontSizeSpan();

fontSizeUp.addEventListener('click', () => {
    fontSize++;
    content.style = 'font-size:' + fontSize + "px;";
    updateFontSizeSpan();
})

fontSizeDown.addEventListener('click', () => {
    fontSize--;
    content.style = 'font-size:' + fontSize + "px;";
    updateFontSizeSpan();
})












    




