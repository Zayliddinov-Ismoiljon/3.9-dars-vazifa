var elForm= document.querySelector(".form");
var elInput= document.querySelector(".form-control");
var elSpanJuft= document.querySelector(".juft");
var elSpanToq= document.querySelector(".toq");
var elJuft=[];
var elToq=[];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    
    
    if(elInput.value%2===0){
        elJuft.push(elInput.value);
        elSpanJuft.textContent=  elJuft;
    }

    else{
        elToq.push(elInput.value);
        elSpanToq.textContent=  elToq;
    }
    
    elInput.value=" ";
    
})