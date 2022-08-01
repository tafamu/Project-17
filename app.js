const ust=document.querySelector(".top");
const orta=document.querySelector(".middle");
const letters=document.querySelectorAll(".letter");
const contents=document.querySelectorAll(".content");
const answer=document.querySelector(".answer");
const remain_time=document.querySelector(".time-container");

var not_answered=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var main_index=0;
var cevaplar=["akü","bahar","camii","deprem","ebat","fabrika","gaf","hacamat","ıhlamur","istifa","jüpiter","katı","lale","monoton","nahoş","ortak","özür","pratik","ray","sadakat","şık","tek","ufuk","üçkağıt","vazife","yardım","zafer"];
var kalan_sure;
var bir_kere=true


answer.focus();


class Game{
    constructor(zaman_){
        this.zaman=zaman_+1;
    }
    bitir(){
        answer.disabled=true;
        answer.value="OYUN BİTTİ";
        clearInterval(kalan_sure);
    } 
}
let oyun=new Game(300);



function sure(){
    oyun.zaman--;
    if(oyun.zaman%60<10){
        remain_time.innerHTML=`${parseInt(oyun.zaman/60)}:0${oyun.zaman%60}`;
    }
    else{
        remain_time.innerHTML=`${parseInt(oyun.zaman/60)}:${oyun.zaman%60}`;
    }
}
function kaydir(){
    if(!oyun.zaman){
        oyun.bitir();
    }
    ust.style.left=`-${130*not_answered[main_index]}px`;
    orta.style.left=`-${600*not_answered[main_index]}px`;
}
setInterval(kaydir,10);
sure();





answer.addEventListener("keydown",function(e){
    if(e.keyCode==13){
        if(!main_index&&bir_kere){
            kalan_sure=setInterval(sure,1000);
            bir_kere=false;
        }
        temp=not_answered[main_index];
        get=answer.value.toString().toLowerCase();
        if(get=="/pas"){
            answer.value="";
            letters[temp].style.backgroundColor="yellow";
            if(temp<not_answered[not_answered.length-1]){
                main_index++
            }
            else{
                main_index=0;
            }
            if(not_answered.length==0){
                oyun.bitir();
            }
        }
        else if(get=="/bitir"){
            oyun.bitir();
        }
        else{
            answer.value="";
            if(get==cevaplar[temp]){
                letters[temp].style.backgroundColor="green";
            }
            else{
                letters[temp].style.backgroundColor="red";
            }
            not_answered.splice(main_index,1);
            if(temp>=not_answered[not_answered.length-1]){
                main_index=0;
            }
            if(not_answered.length==0){
                oyun.bitir();
            }
        }
        console.log(temp,not_answered);
    }
});

