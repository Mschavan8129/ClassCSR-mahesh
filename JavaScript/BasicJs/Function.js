//three types of declaration of function
//1.with function name 

function add(num1,num2)
{
    return num1+num2;
}


//2.Function Expression
let funSub=function(num1,num2){
    return num1-num2;
}


//3. Arrow Function
let multi=(num1,num2)=>{
     console.log(num1*num2);
     return num2;
}


let val1=25;
let val2=20;
console.log(add(val1,val2))
console.log(funSub(val1,val2))
console.log(multi(val1,val2))
multi(25,2)
