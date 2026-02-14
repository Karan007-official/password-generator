


const btn=document.getElementById("genPass")
const newPass=document.getElementById("newPass")
const slider=document.getElementById("range")
const rangeVal=document.getElementById("rangeVal")

const uppercase=document.getElementById("capital")
const lowercase =document.getElementById("small")
const number=document.getElementById("number")
const symbol=document.getElementById("symbol")

const copyBtn=document.getElementById("copyBtn")


rangeVal.innerText=slider.value

slider.addEventListener('input',(e)=>{
    rangeVal.innerText=e.target.value 
})


btn.addEventListener('click',()=>{

    let capitalLetter='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter='abcdefghijklmnopqrstuvwxyz';
    let numberStr='0123456789';
    let symbolsStr='!@#$%^&*()_+{}|?":><?\.,;`~';
    let finalStr= '' ;

    if(uppercase.checked){
        finalStr+=capitalLetter;

    }
    if(lowercase.checked){
        finalStr+=smallLetter;
    }
    
    if(number.checked){
        finalStr+=numberStr;
    }
    if(symbol.checked){
        finalStr+=symbolsStr;
    }

    if(finalStr==''){
        alert("please select any one option ")
    }


 
    let latesPass='';

    


     for(let i=0;i<slider.value;i++){
        let randNum=Math.floor(Math.random()*finalStr.length)
       // latesPass+=finalStr[randNum]
        latesPass+= finalStr.charAt(randNum)

     }
       

   newPass.innerText=`${latesPass}`



})

copyBtn.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(newPass.innerText)

    
})