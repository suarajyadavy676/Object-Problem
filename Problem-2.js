// input
let productName = ["Rice", "Dal", "Salt"]
let productQuantity = [2, 3, 1]
let productPrice = [60, 50, 20]

// let arrObj = [
//   {
//   name : productName[0],
//   quantity : productQuantity[0],
//   price : productPrice[0],
// },
// {
//   name : productName[1],
//   quantity : productQuantity[1],
//   price : productPrice[1],
// },
// {
//   name : productName[2],
//   quantity : productQuantity[2],
//   price : productPrice[2],
// }
// ]

let arrObj = []
let obj = {}
for(let i = 0; i < productName.length; i++){
  obj = {
    name : productName[i],
    quantity : productQuantity[i],
    price : productPrice[i],
  }
  arrObj.push(obj)
}
// console.log(arrObj)

let total = 0
arrObj.forEach(ele=>{
  total += (ele.quantity)*(ele.price)
})
console.log(total)

