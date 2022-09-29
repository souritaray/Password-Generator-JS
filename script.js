const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
let low="abcdefghijklmnopqrstuvwxyz";
let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols= `!"#$%&()*+,-/<=>?@[\]^_{|}~`;
let res="";
let pass="";

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    let copyText=resultEl.innerText;
    navigator.clipboard.writeText(copyText).then(function(){
        alert("Copied");
    });
    
})

generateEl.addEventListener('click', () => {
    let l=generatePassword(getRandomLower(),getRandomUpper(),getRandomNumber(),getRandomSymbol(),lengthEl.value);
    for(let y=0;y<l;y++){
        pass=pass+res[Math.floor(Math.random()*10)];
    }
   
    resultEl.innerText=pass; 
    pass="";
    res="";
})

function generatePassword(lower, upper, number, symbol, length) {
    for(let x=0;x<length;x++){
        if(uppercaseEl.checked==true){
            res=res+getRandomUpper();
       ;
        }
        if(lowercaseEl.checked==true){
            res=res+getRandomLower();
           
        }
        if(numbersEl.checked==true){
            res=res+getRandomNumber();
           
        }
        if(symbolsEl.checked==true){
            res=res+getRandomSymbol();
         
        }

    }
    return length;
}

function getRandomLower() {
    return low[Math.floor(low.length*Math.random())];

}

function getRandomUpper() {
    return up[Math.floor(up.length*Math.random())];
}

function getRandomNumber() {
    return Math.floor(16*Math.random());
}

function getRandomSymbol() {
    return symbols[Math.floor(symbols.length*Math.random())];
}