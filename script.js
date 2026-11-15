let span = document.getElementById(`hamburguer`);
let menu = document.getElementById(`menu`);


span.addEventListener ("click", function (){
    menu.classList.toggle(`escondido`);
});