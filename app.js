// povezem prikaz i dugmice
// preko mapa ubacim funkciju na addEventListener i pozivam drugu da izracuna el
// pravim funkciju za izracunavanje ela
// u funkciju ubacujem case ac del i = ubacujemo posebno ostali dygmici idu na default

let prikaz= document.querySelector("#display");
let buttons = Array.from(document.querySelectorAll(".btn"));
console.log(buttons);
buttons.map(btn =>{
    btn.addEventListener("click",el =>{
        izracunaj(el);
    })
})
function izracunaj(e){
    if(prikaz.innerText == "0"){
        prikaz.innerText = "";
    }
  switch (e.target.innerText) {
    case 'AC':
        prikaz.innerText ="0";
        break;
  case 'DEL':
    if(prikaz.innerText){
        prikaz.innerText = prikaz.innerText.slice(0,-1);
    }
   if(prikaz.innerText ==""){
    prikaz.innerText = "0";
   }
    break;
    case '=':
        prikaz.innerText = eval(prikaz.innerText);
        break;
    default:
        prikaz.innerText += e.target.innerText;
        break;
  }
}

