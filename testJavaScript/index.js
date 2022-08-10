 
// console.log("Hellow world",6+6,"another text");
// alert("are you sure?")
// document.write("this is document weite")
// console.warn("this is a warning")
// console.error("this is an error");
// console.assert(1 + 10 == 11, "Expression returned false");
 



// var number1 =34;
// var number2 =56;
// console.log(number1+number2);

// var str1="this is string";
// var marks ={
//     smeet:34,
//     sd:45,
//     dd:46
// }
// var a = true;
// var b = false;

// var und = undefined;
// console.log(und)

// var arr =  [1,2,3,4,5];

// console.log(arr[3]);
// var age = 5 ;
// if(age < 19){
//     console.log("you are teen")
// }
// else{
//     console.log("you are adult")
// }
// if(age>20){
//     console.log("you are not a kid")
// }
// else if(age>16){
//     console.log("you are kid")
// }
// else if(age>7){
//     console.log("you are kid")
// }
// else if(age>5){
//     console.log("you are kid")
// }

// var arr =[1,2,3,4,5,6,7]
//  console.log(arr);
//  for(var i = 0;i<arr.length;i++){
//  if(i==2) {
//    break;
//  }
//  console.log(arr[i])
//  }

//  arr.forEach(function(element){
//    console.log(element)
//  })
//  let j=0;
//  while(j<arr.length){
//    console.log(arr[j]);
//    j++;
//  } while (j<arr.length);

 
//  do{
//    console.log(arr[j])
// j++;
//  } while(
// j<arr.length
//  );







// let myarr=["fan", "camera",34,null,true];


// console.log(myarr.length);

// myarr.shift();
// // myarr.pop();
// console.log(myarr);
let string1="Smeet is a good boy";
// console.log(string1.length);
// console.log(string1.lastIndexOf("good"));
// console.log(string1.slice(0,4));
// console.log(string1.replace("Smeet","Bhaiya"));
// console.log(string1.replace("good","bad"));

let mydate=new Date();
console.log(mydate.getFullYear());
console.log(mydate.getDay ());
console.log(mydate.getMonth());
 
document.getElementById('click').click();
document.getElementById('click').style.border='2px solid blue';
 
let elem = document.getElementById('click');
 console.log(elem);

 let elemclass = document.getElementsByClassName("container")
 console.log(elemclass);
// elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg");

console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemclass[0].innerText);
console.log(elemclass[0].innerHTML);
