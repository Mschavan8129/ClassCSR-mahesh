
function upper()
{
    let input=document.querySelector("#upper").value
    let str=new String(input)
    document.querySelector("#upper_output").innerText=str.toUpperCase()
}
function lower()
{
    let input=document.querySelector("#lower").value
    let str=new String(input)
    document.querySelector("#lower_output").innerText=str.toLowerCase()
}

function charAt()
{
    let input=document.querySelector("#charAt").value
    let ind=document.querySelector("#ind").value
    let str=new String(input)
    let index=Number(ind)
    document.querySelector("#charAt_output").innerText=str.charAt(index)
}

function Concat()
{
    let a=document.querySelector("#concat1").value
    let b=document.querySelector("#concat2").value
    let str1=new String(a)
    let str2=String(b)
    //window.alert(a)
    document.querySelector("#concat_output").innerText=str1.concat(str2)
}

function Include()
{
    let a=document.querySelector("#include1").value
    let b=document.querySelector("#include2").value
    let str1=new String(a)
    let str2=String(b)
    //window.alert(a)
    document.querySelector("#include_output").innerText=str1.includes(str2)
}

function IndexOf()
{
    let a=document.querySelector("#indexOf1").value
    let b=document.querySelector("#indexOf2").value
    let str1=new String(a)
    let str2=String(b)
    //window.alert(a)
    document.querySelector("#indexOf_output").innerText=str1.indexOf(str2)
}


function Repeat()
{
    let a=document.querySelector("#repeat1").value
    let b=document.querySelector("#repeat2").value
    let str1=new String(a)
    let str2=Number(b)
    //window.alert(str1.repeat(str2))
    document.querySelector("#repeat_output").innerText=str1.repeat(str2)
}


function Replace()
{
    let a=document.querySelector("#replace1").value
    let b=document.querySelector("#replace2").value
    let c=document.querySelector("#replace3").value
    let str1=new String(a)
    let str2=String(b)
    let str3=String(c)
    
   // window.alert(str1.replace(str2,str3))
    document.querySelector("#replace_output").innerText=str1.replaceAll(str2,str3)
}



function Slice()
{
    let a=document.querySelector("#slice1").value
    let b=document.querySelector("#slice2").value
    let c=document.querySelector("#slice3").value
    let str1=new String(a)
    let str2=Number(b)
    let str3=Number(c)
    //window.alert(str1.repeat(str2))
    document.querySelector("#slice_output").innerText=str1.slice(str2,str3)
}

// function Split()
// {
//     window.alert("mahesh")

//     let a=document.querySelector("split").value
//     let str1=new String(a)
//     window.alert("mahesh")
//     document.querySelector("#split_output").innerText=str1
// }

function split()
{
     //window.alert("mahesh")

    let a=document.querySelector("#split").value
    let str1=new String(a)
    console.log(str1.split(" "))
     document.querySelector("#split_output").innerText="["+str1.split(",")+"]"

//  window.alert("chavan")
//     window.alert(str1)
}


function subString()
{
    let a=document.querySelector("#sub1").value
    let b=document.querySelector("#sub2").value
    let c=document.querySelector("#sub3").value
    let str1=new String(a)
    let str2=Number(b)
    let str3=Number(c)
    //window.alert(str1.repeat(str2))
    document.querySelector("#sub_output").innerText=str1.substring(str2,str3)
}