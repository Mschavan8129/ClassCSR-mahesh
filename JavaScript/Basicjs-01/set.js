
const set=new Set()
set.add(10)
set.add(20)
set.add(30)
const Iterator=set.values()

// document.write("<p>output: "+set+"</p>")
document.querySelector("#add").innerText=Iterator.next().value+" "+Iterator.next().value+" "+Iterator.next().value
const set1=set.delete(20)
document.querySelector("#delete").innerText=[...set]
document.querySelector("#has").innerText=set.has(20)
document.querySelector("#size").innerText=set.size
function logSetElements(value1, value2, set) {
    console.log(`s[${value1}] = ${value2}`);
  }
  
set.add("Mahesh")
set.forEach(logSetElements)

set.clear()
console.log([...set])
