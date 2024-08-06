
///fibbonaccie number 
//printing first nth fibbonaccie number

let num1=0
let num2=1
// console.log(num1,num2)
let n=10;
var temp1
for(var i=3;i<=n;i++)
{ 
     temp1=num2
    num2+=num1;
    num1=temp1
   console.log(num2)
}



//printing  nth fibbonacci number
num1=0
num2=1
console.log(`${n}th fibbonaccie number`)
console.log(n==10);
if(n==1)
{
    console.log(num1)
}
else if(n==2)
{
    console.log(num2)
}
else{
    let i=3;
    while(i<=n)
    {
        temp=num2
        num2+=num1
        num1=temp
        i++
    }

    console.log(num2)
}