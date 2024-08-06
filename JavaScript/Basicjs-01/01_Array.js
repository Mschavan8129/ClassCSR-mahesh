//declaration
// const myArr=[1,2,3,4,5,6]
const myArr=new Array(1,2,3,4,5,6);
// console.log(myArr)
// console.log(myArr[4])
// myArr.push(12)
// console.log(myArr);
// myArr.pop()
// console.log(myArr)
// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(3))
// const newArr=myArr.slice(1,4)
// console.log("A",myArr)
// console.log(newArr)
// const newArr1=myArr.splice(1,4)
// console.log("B",myArr)
// console.log(newArr1)

// console.log(myArr.join())//return string from array

const myArr2=new Array(11,12,13,14,15)
const concate_Arr=myArr.concat(myArr2)
const sprade_operator=[...myArr,...myArr2]

// console.log(concate_Arr)
// console.log(sprade_operator)
myArr.push(myArr2)

// console.log(myArr)
// const myArr1=myArr.flat()
// console.log(myArr1)


console.log(Array.isArray(myArr))
console.log(Array.isArray("Mahesh"))
console.log(Array.from("Mahesh"))
console.log(Array.of(1,5,7,8,9))







