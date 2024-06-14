let display =document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('butt'));

buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case '=':
                 display.value= eval(display.value);
                 if(display.value=="Infinity"){
                    display.value="Error in division by 0";
                }
            break;
            case 'C':
                display.value= " ";
            break;
            default:
                display.value += e.target.innerText;
                
        }

    });
});

//&#215;