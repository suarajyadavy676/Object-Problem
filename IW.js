// Create an object with the following functionality
"use strict";
// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.
let object = {
  student1: {
    sub1: 76,
    sub2: 80,
    sub3: 90,
  },
  student2: {
    sub1: 79,
    sub2: 80,
    sub3: 90,
  },
  student3: {
    sub1: 87,
    sub2: 80,
    sub3: 90,
  },
};
let totals = []
for(let keys in object){
  let TotalMarks = (object[keys].sub1) + (object[keys].sub2) + (object[keys].sub3)
  totals.push({student:keys,total:TotalMarks})
}
console.log(totals)

let high = 0
let s = ''
let low = 2000
let p = ''
function highest(){
  totals.map((ele) =>{
    if(ele.total>high){
      high = ele.total
       s = `The highest marks is ${ele.student} : ${ele.total }`
    }
  })
  console.log(s)
}
function minimum(){
  totals.map(ele =>{
    if(ele.total < low){
      low = ele.total
      p = `The lowest marks is ${ele.student} : ${ele.total }`
    }
  })
  console.log(p)
}

highest()
minimum()