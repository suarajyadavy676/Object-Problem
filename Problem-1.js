// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle
function rect(len,wid){
  let rectObject = {
    length : len,
    width : wid,
  }
  // console.log(rectObject)
  console.log(`The length of rectangle is ${rectObject.length}`)
  console.log(`The width of rectangle is ${rectObject.width}`)
  area(rectObject)
  perimeter(rectObject)
}

function area(obj){
  let area = (obj.length) * (obj.width);
  console.log(`The area of rectangle is ${area}`)
}
function perimeter(obj){
  let perimeters = ((obj.length) + (obj.width))*2
  console.log(`The perimeter of rectangle is ${perimeters}`)
}

rect(3,4)
