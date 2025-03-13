const inputfield=document.getElementById('input');
const ansfield=document.getElementById('ans');
const buttons=document.querySelectorAll('.circle');
let currentinput='';
let operand1='';
let operator='';

buttons.forEach((button)=>{
    button.addEventListener("click", function(){
        let value=button.textContent;
        if(value==='AC'){
        clearAll();
        return;
        }
        if(value==='Del'){
       currentinput=currentinput.slice(0, -1);
       inputfield.value=currentinput;
        return;
        }
        if(isNaN(value) && value!=='.' && value!=='='){
            if(operator && operand1){
                operator=value;
                currentinput +=' '+operator+' ';
            }else{
                operator=value;
                operand1=currentinput;
                currentinput+= ' '+ operator+ ' ';
            }
        }
        else if(value==='='){
            if(currentinput){
                calculate();
                return;
            }
        }
        else{
            currentinput+=value;
        }
        inputfield.value = currentinput;
    })
})
function clearAll(){
    currentinput='';
    operand1='';
    operand2='';
    inputfield.value='';
    ansfield.textContent='';
}
function calculate(){
    const parts=currentinput.split(' ');
    if(parts.length<3){
    return;
    }
    operand1= parseFloat(parts[0]);
   const operand2=parseFloat(parts[2]);
    operator=parts[1];
    let result;
    switch(operator){
        case '+':
            result=operand1+operand2;
            break;
        case '-':
            result=operand1-operand2;
            break;
        case 'x':
            result=operand1 * operand2;
            break;
        case '/':
            result=operand2!==0? operand1/operand2:'Error';
            break;
        case '%':
            result=operand1%operand2;
            break;
        default:
            break;
    }
    ansfield.textContent=result|| 'Error';
    currentinput='';
    operator='';
    inputfield.value='';
}
