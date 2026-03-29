const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (carCollection.includes(carBrand)){
    return `${carBrand} already exists in position ${carCollection.indexOf(carBrand) + 1}
       of the car collection.`;
  } else {
    carCollection.push(carBrand);
    return `New car collection is ${carCollection}`
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("gtx")); //new car collection is : toyota,fiat,honda,bmw,audi.
//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("RTX")); //toyota has already existed in the 1 position of car collection.


