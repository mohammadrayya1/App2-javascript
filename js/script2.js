

var arr=document.querySelectorAll('button');
let input1=document.querySelector('#in1');
var number1=document.querySelector('#x');
var number2=document.querySelector('#y');
var op=document.querySelector('#ope');


for(var i=0;i<10;i++)
{
 
  arr[i].setAttribute('id',i);
}


arr.forEach(function(num)
{
num.addEventListener('click',function()
{
    var oper=num.id;
    if(Number(oper))
    {
     
    if(x.value)
    {
        input1.value+=oper;
        y.value +=oper;
    }
    else{
    input1.value+=oper;
      
      }
    }

else
{
   
    switch(oper)
    {
        case "*" :
        op.value=oper;
        x.value=parseInt(input1.value);
        input1.value="";
        break;

        case "-" :
            op.value=oper;
            x.value=input1.value;
            input1.value="";
            break;

            case "+" :
                op.value=oper;
                x.value=parseInt(input1.value);
                input1.value="";
                break;

                case "div" :
                    op.value=oper;
                    x.value=input1.value;
                    input1.value="";
                    break;

                    case "del" :
                        op.value=oper;
                        x.value=input1.value;
                        input1.value="";
                        break;
        

        case "c" :
            x.value="";
            y.value="";
            input1.value="";
            op.value="";
            break;



        case "equal":
           
            if(x.value && y.value)
            {
              if(op.value=="*") 
               
              {
                input1.value=x.value*y.value;
              }
              else if(op.value=="-")
              {
                input1.value=x.value-y.value;  
              }
              else if(op.value=="+")
              {
                
                 

                input1.value=(parseInt(x.value)+ parseInt (y.value));  
              }
              else if(op.value=="div")
              {
                input1.value=x.value/y.value;  
              }
              else if(op.value=="del")
              {
                input1.value=x.value%y.value;  
              }
        
            }
        break;
    }
}

});
});

