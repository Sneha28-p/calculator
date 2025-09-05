const screen=document.getElementById('screen');
const buttons=document.querySelectorAll('button');
let expression="";
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.innerText;
        if(value==="Clear"){
            expression="";
            screen.value="";
        }else if(value==="="){
            try{
               expression=eval(expression);
               screen.value=expression;
            }catch{
                screen.value="Error";
                expression="";
            }
        }else if(value==="√"){
            try{
                expression=Math.sqrt(eval(expression)).toString();
                screen.value=expression;
            }catch{
                screen.value="Error";
                expression="";
            }
        }else if(value==="x²"){
            try{
                expression=Math.pow(eval(expression),2).toString();
                screen.value=expression;
            }catch{
                screen.value="Error";
                expression="";
            }
        }else if(value==="^"){
            expression+="**";
            screen.value=expression
        }else if(value==="%"){
            expression+="%";
            screen.value=expression
        }else{
            expression+=value;
            screen.value=expression;
        }
    });
});

