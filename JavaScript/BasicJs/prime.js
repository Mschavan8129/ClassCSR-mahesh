
function check()
{
    
    let temp=document.getElementById("num");
    let num=Number(temp.value);
    
    let n=2;
    while((n*n)<=num)
    {
        if(num%n==0)
        { 
            document.getElementById("result").innerText="Number is Not prime";
            break;
        }
        n+=1;
    }

    if((n*n)>num)
    {
        document.querySelector("#result").innerText="Number is prime";

    }


}