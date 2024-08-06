let heading="Array Methods"

const numArr=[10,20,30,65,40,50]

const hobbies=["singging", "playing cricket","reading","drawing"]


document.querySelector("#array").innerText=heading;

document.write("<p> Original  Array:  " + numArr+"</p>")
document.write("<p> Array length  property  [arr.length]:  " + numArr.length+"</p>")
document.write("<p>Array to string [arr.toString()]:"+numArr.toString()+"  </p>")
//doucument.write("<p>Array to string [arr.toString()]:  "+numArr.toString()+" </p>")
 document.write("<p>Array join  [array.join('separator') "+numArr.join("-")+"</p>")
document.write("<p>Push Method add element at last index  [array.push(element)] pushed element {"+numArr.push(70)+"}new Array: "+numArr+" </p>")
 document.write("<p>Pop element delete last element [array.pop()]  poped element {"+numArr.pop()+"}    new Array: "+numArr+"</p>")
 document.write("<p> add element at start [array.unshift()]  shift element {"+numArr.unshift(11)+"}     new Array: "+numArr+ +"</p>")
 document.write("<p>delete first element in array [numArr.shift()]"+numArr.shift()+"new Array: "+numArr+"</p>")
 document.write("<p> reverse array:[array.reverse()]"+numArr.reverse()+"</p>")
 document.write("<p>sorted array [array.sort()]  Array:["+numArr.sort()+"]</p>")
document.write("<p> slice the array [numArr.slice(2,4)] slice array ["+numArr.slice(2,4)+" ]</p>")
document.write("<p>splice-delete the particular portion [numArr.splice(2,4)]  splice array ["+numArr.splice(2,4)+"]   Original Array: "+numArr+"</p>")


