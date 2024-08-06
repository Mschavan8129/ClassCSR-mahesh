const contact=new Map()

contact.set("Mahesh","8329526059")
contact.set("saurabh","859652364")
contact.set("rushi","9422523264")
contact.set("shubahm","9545885215")

document.querySelector("#get").innerText="Rushikesh  "+contact.get("rushi")
console.log(contact)
contact.delete("shubham")

document.querySelector("#hasmap").innerText=contact.has("shubham")

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }
  
  contact.forEach(logMapElements);