const mybutton = document.getElementById('mybutton');
const head = document.getElementsByTagName('head')[0]; 
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './darkmode.css';
link.media = 'all';
let dark = false;
var a = "dsaffsdajdfaslk" +
"sadflsdal;kjfsdal" +
"jasfdlkjsdalk;fsda" +
"asdjfhlkjasdf";
mybutton.addEventListener('click', ()=>{
    if (dark){
        head.removeChild(link);
        dark = false;
    } else {
        head.appendChild(link);
        dark = true;
    }
})