// let x=10;
// let y=20;
// if ( x> 5 && y<25){
// console.log("A")
// }else{
//     console.log("b")
// }
// let isAdmin = true;
// let isLoggedIn = false;
// if(isAdmin||isLoggedIn){
//     console.log("Accessed granted")
// }else{}
//     console.log("Access Denied")
// }
// let temp =35;
// if(!(temp<30)){
//     console.log("hot")
// }else{
//     console.log("cold")
// }
// let points = 20;
// let status = points > 100 ? "GOLD" : points > 50 ? "silver" : "bronze";
// console.log(status);
// let isLoggedIn = true;
// let hasToken = false;
// let Access = isLoggedIn && hasToken ? "Allow" : "deny"
// console.log(Access)
// let a=5;
// a++;

// console.log(a)
// let x=3;
// let y=x++;
// console.log(x,y)
// let m=10;
// console.log(m--);
// console.log(m);
// let likes=100;
// function likePost(){
//     return ++likes;
// }
// console.log(likePost());
// console.log(likes)
// LOOP
// let i =1;
// while(i<33){
//     console.log(i);
//     i++;
// }
// let i=1;
// do{
//     console.log(i)
//     i++;
// }while(i<20)
// for (let i = 0; i < 201; i++) {
// console.log(i)
// if(i===32){
//     break;
// }
// }
// Q1 Print  numbers from 1 to 10 using for a loop
// for(let i=1;i<11;i++){
//     console.log(i);
// }
// Q2 Print  numbers from 20 to 1 using for a while loop
// let i=10
// while(i>0){
//   console.log(i)
// i--
// }
// Q3 Print  even numbers from 1 to 20  using a for loop?
// for(let i=1;i<21;i++){
//     if(i%2===0){
//         console .log(i);
//     }
// }
// Q4 Print  even numbers from 1 to 15  using a while loop?
// let i=1
// while(i<=15){
//     if(i%2===1){
//         console.log(i);
//     }
// i++;
// }
// Q5 Print the multiplictaion of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i}=${5 * i}`)
//     // console.log(5*i)
// }
// // Q6 find the sum of numbers 1to100 using a loop
// let sum=0
// for(let i=1;i<=100;i++){
// sum+=i;

// }
// console.log(sum);
// Q7 prnit the divisilble of 3 1 to 50 using a loop

// for(let i=1;i<=50;i++){
//    if(i%3==0){
//     console.log(i)
//    }
// }
// let val=prompt("give a number")
// for(let i=1;i<=val;i++){
//     if(i%2==0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }
// let num=12345;
// let count =0;
// while(num>0){
// count ++;
// Math.floor(num/10);
// }console.log(count);
// how to function declare
// function functionName(parameters) {
//     // function body
// }
//1=> function decleration
// function lolo(){
//     console.log("hello")
// }
// lolo();
// let fnc = function(){
//     //FUNCTION EXP

// }
// fnc();
// 3=>arrow function
// let fnc=()=>{
//     console.log("hello")
// }
// fnc();
// ${} dynamic value in String
// function add(v1,v2){
//     console.log(v1+v2);
// }
// add(10,20);
// add(100,200);
// 🧂 Default + Rest + Spread
//Default Parameters
// function add(v1=0,v2=0){
//     console.log(v1+v2);
// }
// add(1,2)
//rest parameters
// function sum(a,b,c,...val){
// console.log(a,b,c,val);
// }
// sum(1,2,3,4,5,6);
// function abcd(){
//     return 12;
// }
// let val= abcd();
// console.log(val);
// first class function
// function abcd(val){
//     val();
// }
// abcd(function(){console.log("hello")});
//higher order function
// function abcd(val){
//     return function(){
// console.log("hello");
//     }
// }
// abcd(
// )();
//CLOSURE FUNCTION
// function ABCD(){
//     let a=12;
//     return function(){
//         console.log(a);
//     }
// }
//lexical scope
// function abcd(){
//     let a=10;
//         function efgh(){
//             let b=20;
//             function ijkl(){
//                 let c=30;
//             }

//         }
// }
//iimmediately invoked function expression
// (function abcd(){
// })();
//hoist
// abcd();
// function abcd(){
//     console.log("hello");
// }

// Q1 what is the difference between function declaration and function expression?
// Function declaration is hoisted, meaning it can be called before it is defined in the code. Function expression is not hoisted, so it must be defined before it is called.
// greet();
// function greet(){
//     console.log("hyy hani");
// }

// //function expression

// let greet2=function(){
//     console.log("hyy hani");
// }
// greet2();
// let multiply = (a=0,b)=>{
//     return a*b;
// }
// multiply(2,2);
// function Welcome(name){
//     console.log(name);
// }
// Welcome("hani");
//What does the... operator mean in  parameter?
//Use rest parameter to accept any numbers of scores and return the total score
// function getScore(...scores){
//     let total=0;

//  scores.forEach(function(val){
// total+=val;
//  });
//  return total;

// }
//  console.log(getScore(10,20,30,40));
// function checkAge(age){
//     if(age<18) return "too young";
//     return "Allowed";
// }
// console.log(checkAge(17));
// Q what is the return value of this function?
//     function f(){
//         return;
//     }console.log(f());
// Pass a function into another function and execute it
// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("hey")
// });
//Write a BMI calculator using function
// function bmi(height,weight){
//     return ((weight/(height*height)).toFixed(2));
// }
// console.log(bmi(1.9,69));
//Discounr Calculatorusing higher order function
// function discountCalculator(discount){
//     return function(price){
// return price-(price*discount/100);
//     };
// }

// let ten =discountCalculator(10);
// let twenty =discountCalculator(20);
// console.log(ten(1200));
// console.log(twenty(2000));
// function counter(){
//     let count=0;
//     return function(){
//         count++;
// return count;
//     }
// }
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// let d=counter();
// console.log(d());
// console.log(d());
// function double(val){
//     return val*2;

// }
// console.log(double(5));\
// iife isolating the variable
// (function (){
//     const password="secret password";
//     console.log(password);

// })();



//ARRAYS
// let make =[10,20,30,40];
//modiefy the array
// make[2]=20;
// make.push(2,50);
// make.pop(0,23)
// make.shift();
// splice is the modiefy the original array and it can which index and how many values to be remove
// make.splice(2,1);
// slice is not modiefy the original array its create a new array
//  let newarr =make.slice(1,3);

// let arr =[10,20,30,40,50];
// // arr.reverse();
//  let arra =arr.sort(function(a,b){
//     return b-a;
// });

// for each loop
// let arr =[10,20,30,40,50];
// arr.forEach(function(val){
// console.log(val);
// })



//Object
// const person={
//     name:"hani",
//     address:{
//         city:"bhopal",
//         state:"mp",
//         location:{
//             lat:"22.4",
//             lng:"77.2",
//         },
//     },
// };
// let {lat,lng}=person.address.location;
// let key = "marks";
// let report = {
// [key]: 89
// };
//deep copy
// const user = {
//     name: "hani",
//     address: {
//         city: "bhopal",
//         state: "mp",
//         location: {
//             lat: "22.4",
//             lng: "77.2",
//         },
//     },
// };

// let deepCopy = JSON.parse(JSON.stringify(user));
// let student = {
//     name: "hani",
//     age: 22,
//     address: {
//         city: "bhopal",
//         state: "mp",
//         location: {
//             lat: "22.4",
//             lng: "77.2",
//         },
//     },
// };
// //shallow copy
// //
// let newStudent = { ...student };
// let newOne = Object.assign({}, student);
//example
//   let arr =[2,21,45,34];
//   let newArr =[...arr];
//   console.log(newArr);
//   const name ="hani";
//   const city="gwalior";
//   let age="64";
//   console.log(name);

// let x = 5;
// let Y = 10;
// console.log(x);
// console.log(count);
// var count = 42;
// const count=43;
// let count = 3;


// if ("0") {
// console.log("Runs"); // "0" is a non-empty string = truthy
// }
// console.log(null + 1);
// console.log("5" + 3);
// console.log("5" - 3);
// console.log(true + false);
// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);
// function isEmpty(value){

// }
// isEmpty();

// function isEmpty(value) {
//   return value === null || value === undefined || value === "";
// }
// console.log(isEmpty(null));
// script.js:401 true
// index.html:38 Live reload enabled.
// isEmpty
// ƒ isEmpty(value) {
//   return value === null || value === undefined || value === "";
// }
// console.lo
// undefined
// console.log(isEmpty(unde
// VM220:1 Uncaught SyntaxError: missing ) after argument list
// console.log(isEmpty(undefined))
// VM240:1 true
// undefined
// console.log(isEmpty(""))
// VM272:1 true
// undefined

// console.log(5 == "5");

// VM289:2 true
// undefined

// console.log(5 === "5");

// VM292:2 false
// undefined
// let a = 10, b = 3;


// undefined
// console.log(a + b);
// VM305:1 13
// undefined
// consol
// VM338:1 Uncaught ReferenceError: consol is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM338:1
// console.log(a%b0
// VM426:1 Uncaught SyntaxError: missing ) after argument list
// console.log(a%b)
// VM438:1 1
// undefined
// console.log(2**2)
// VM466:1 4
// undefined
// console.log(2**3)
// VM475:1 8
// undefined
// let score = 5;
// undefined
// score
// 5
// score+=2
// 7
// let x = "5";

// undefined
// console.log(+x); // 5 (converted to number)
// VM526:1 5
// undefined
// typeof +x
// 'number'
// let score = 80;

// undefined
// let grade = score > 50 ? "Pass" : "Fail";
// undefined
// let grade = score>=80?"correct":"fail'
// VM706:1 Uncaught SyntaxError: Invalid or unexpected token
// let grade = score>=80?"correct":"fail";
// undefined
// console.log
// ƒ log() { [native code] }
// console.log(grade
// VM805:1 Uncaught SyntaxError: missing ) after argument list
// console.log(grade);
// VM817:1 correct
// undefined
// console.log(grade);
// VM821:1 correct
// undefined
// console.log("10"+1);
// VM929:1 101
// undefined
// console.log("10"-1);

// undefined
// console.log(true + false);

// undefined
// console.log(false + false);

// undefined
// let str ="42";
// undefined
// let num =+str;
// undefined
// console.log(num);

// undefined

// typeof num
// 'number'
// typeof str
// 'string'
// let age = 17;
// undefined

// undefined
// let msg = age>=18?"adult":"minor";
// undefined
// console.log(msg)
// VM1583:1 minor
// undefined
// age= 45;
// 45
// console.log(msg)
// VM1617:1 minor
// undefined
// console.log(msg);
// VM1626:1 minor
// undefined
//build a calculator
// function calculator(a,b,operator){
//     switch(operator){
//         case '+':
//             return a+b;
//             case'-':
//             return a-b;
//             case'*':
//             return a*b;
//             case'/':
//             return  b!==0?a/b:"error division by zero";
//             default:
//                 return "Error:Inavalid Error";


//     }

// }
// console.log(calculator(10,5,'+'));
// console.log(calculator(10,2,'*'));
// console.log(calculator(10,2,'/'));
// console.log(calculator(10,2,'-'));
// let marks=82;
// if(marks>=100){
//     console.log("intelligent");

// }else if(marks>=80){
//     console.log("good");
// }else if(marks>=60){
//     console.log("average")
// }else if(marks>=40){
//     console.log("fail")
// }

// function checkAge(age) {
// if (age < 18) return "Denied";
// return "Allowed";}
// console.log(checkAge(15));
// console.log(checkAge(34));
// for (let char of "11345") {
// console.log(char);
// }
// for (let char of "Sheryians") {
// console.log(char);
// }
// let nums = [10, 20, 30];
// nums.forEach((num) => {
// console.log(num);
// });
// let user = { name: "Harsh", age: 26 };
// for (let key in user) {
// console.log(key, user[key]);
// }
// console.log("hello")
// function createMultiplier(x) {
// return function (y) {
// return x * y;
// };
// }
// let double = createMultiplier(2);
// console.log(double(5)); //




// ...DOM
// let abcd = document.getElementById("abcd");
// console.dir (abcd);
// let abcd=document.getElementsByClassName("abcd");
//  console.dir(abcd);
// let abcd=document.querySelector("h1");
//     console.dir(abcd);
//quertyselectorall GIVes the nodelist like array
// let abcd=document.querySelectorAll("h1");
//  console.dir(abcd);
// let h1 =document.querySelector("h1");

// h1.textContent="Hey hani kaise ho";
// h1.innerHTML="<i>Hey Shivu Kaise Ho</i>";
// h1.hidden=true;

//attribute manipilation
// let a = document.querySelector("a");
// // a.href="https://google.com";

// a.setAttribute("href","https://google.com");
// let img=document.querySelector("img");
// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1758893665497-220a2c5affe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8");
// let a =document.querySelector("a");
// console.log(a.getAttribute("href"));
// a.removeAttribute("href");=



//append prepend
// let h1 = document.createElement("h1");
// h1.textContent="hello ji";
// document.body.append(h1);

//Create a element in js
// let h1=document.createElement("h1");
// console.log(h1);

//prepend
// let h1= document.createElement("h1");
// h1.textContent="khana kha liya akshat ne";
// document.querySelector("body").prepend(h1);

// let h1 = document.querySelector("h1");
// h1.style.color="red";
// h1.style.backgroundColor="yellow";
// h1.style.fontFamily="Gilroy";
// h1.style.textTransform="uppercase";
// let h1 = document.querySelector("h1");
// console.dir(h1);
// h1.classList.add("hulu");
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");


// what is the difference between queryselector and getElementById?
// document.getElementById("ID");
// document.queryselector("#ID");
// let cl=document.getElementsByClassName("color");
// console.log(cl);
// let buyNow = document.querySelectorAll(".buy-now")
// console.log(buyNow)
// let id =document.getElementById("heading");
// console.dir(id);
// id.innerHTML="Welcome to Sheryians";
// id.heading.textcontent="Welcome to sheryians";
// let lis= document.querySelectorAll("li");
// lis.forEach(function(val){
// console.log(val.textContent);
// }
// )
// for(let i=0;i<lis.length;i++){
//     console.log(lis[i].textContent);
// }

// let img =document.createElement("img");
// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1759762964326-96576451b3d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D");
// img.classList.add("placeHolder")
// document.querySelector("div").prepend(img);
//CREATE A NEW LIST ITEM <li>New task</>and it add of the end of the ul
// let ul = document.querySelector("ul");
// let  li = document.querySelector("li");
// li.textContent="new task";
// ul.appendChild(li);
//REMOVE A FIRST ELEMENT OF THE UL LIST BY QUERY SELECTOR
// let ul =document.querySelector("ul");
// let li = document.querySelector("li");
// ul.removeChild(li);

// add a highlist class to every even item in a list
//  let li =document.querySelectorAll("ul li:nth-child(2n)");
//  li.forEach(function(elem){
//     elem.classList.add("highlight");
//  }
//  )

//SET THE FONT SIZE OF ALL <P> ELMENT TO 18PX USING .STYLE
// let p =document.querySelectorAll("p");
// p.forEach(function(elem){
//     elem.style.fontSize="8px"
// });

// let h1= document.querySelector ("h1");
//  h1.addEventListener("click", function(){
//     h1.style.color="Red";
//  })

// let h1 =document.querySelector("p");
// h1.addEventListener("click", function(){
//     h1.style.color="green";
// })

//CLICK

// let p =document.querySelector("p");

// function dblclick(){
//     p.style.color="yellow";
// }
// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);

// let p =document.querySelector("p");
//     p.addEventListener("click",function(){
//         p.style.color="red";
//     });

// let input = document.querySelector("input");
// input.addEventListener("input",function(){
//     console.log("typed")
// })

//INPUT

// let inp = document.querySelector("input");
// inp.addEventListener("input",function(dets){
//     if(dets.data!== null){
//         console.log(dets.data);
//     }
// })
// ;
//  let selectElement = document.querySelector("select");
// let deviceLabel = document.querySelector("#device");
// selectElement.addEventListener("change", function (dets){
// deviceLabel.textContent =`${dets.target.value} Device Selected`;
// });
// let h1 =document.querySelector("h1");
// window.addEventListener("keydown" ,function(dets){
//     if(dets.key===" "){
//       h1.textContent="SPC";
//     }else{
//         h1.textContent=dets.key;
//     }
// });
// let btn= document.querySelector("#btn");
// let fileinp =document.querySelector("#fileinp");
// btn.addEventListener("click",function(dets){
//     fileinp.click();
// });
//     fileinp.addEventListener("change",function(dets){
//         const file =dets.target.files[0];
//         if(file){
//             btn.textContent= file.name;
//         }
//     })

//MOUSEOVER
// let abcd=document.querySelector("#abcd");
// abcd.addEventListener("mouseover", function(){
//     abcd.style.backgroundColor="yellow";

// });
//MOUSE OUT
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red";
// })

//MOUSE MOVE
//  let abcd= document.querySelector("#abcd");
//  window.addEventListener("mousemove", function(dets){
// abcd.style.top = dets.clientY+"px";
// abcd.style.left = dets.clientX+"px";
//  });
//EVENT BUBBLING
// let nav=document.querySelector("#nav");
// nav.addEventListener("click",function(){
// alert("clicked")
// })
// let ul = document.querySelector("ul");
// ul.addEventListener("click",function(dets){
//   dets.target.classList.toggle("lt");
// })
// ;
// let btn=document.querySelector("button");
// let a = document.querySelector(".a");
// let b=document.querySelector(".b");
// let c=document.querySelector(".c");
//  c.addEventListener("click",function(){
//   console.dir("  c clicked");
//  });
//  btn.addEventListener("click",function(){
//   console.log("btn clicked");
//  });
//  b.addEventListener("click",function(){
//   console.log(" b click");
//  });
//  a.addEventListener("click",function(){
//   console.log("a clicked");
//  });

// live Character COunter
// let inp = document.querySelector("input");
// let span = document.querySelector("span");
// inp.addEventListener("input", function () {
//     // console.log("input hua hai");
//     // console.log(inp.value.length);
//     //   span.textContent=20-inp.value.length;
//     let left = 20 - inp.value.length;
//     span.textContent = left;
//     if (left < 0) {
//         span.style.color = "red";
//     } else {
//         span.style.color = "brown"
//     }
// });


// Form Validation
// let form = document.querySelector("form");
//     let nm = document.querySelector("#name");
//     form.addEventListener("submit", function (dets) {
//         dets.preventDefault();
//         // if(nm.value.trim().length <= 2) {
//         //     document.querySelector("#hide").style.display = "block";
//         // }
// else {
//     document.querySelector("#hide").style.display = "none";
// }
//         const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let ans= regex.test("a@.a");
// console.log(ans);
//     });

// Email Vadilator
// let email=document.querySelector("#email");
// let form=document.querySelector("#form");
// let password=document.querySelector("#password");
// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     document.querySelector("#emailError").textContent="";
//     document.querySelector("#passError").textContent=""
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordRegx=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// let emailans =emailRegex.test(email.value);
// let passwordans = passwordRegx.test(password.value);

// let isValid =true;
// if(!emailans){
//     document.querySelector("#emailError").textContent="Email is incorrect";
//     document.querySelector("#emailError").style.display="initial";
//     isValid=false;
// }
// if(!passwordans){
//     document.querySelector("#passError").textContent="Password is incorrect";
//     document.querySelector("#passError").style.display="initial";
//      isValid = false;
// }
// });

//SET TIMEOUT & SETINTerVal
// setInterval(function(){
//     console.log("Hello Akshat");
// },5000);

//  let tm =setTimeout(function(){
//     console.log("hello akshat")
// },1000);
// clearTimeout(tm);

//Clear Interval
// let count =10;
// let interval = setInterval(function(){
//     if(count>=1){
//         count--;
//         console.log(count);
//     }
//     else clearInterval(interval);
// },1000);
// let count=0;
//     let seconds=5;
//     let progress=document.querySelector(".progress");
//     let percentText = document.querySelector(".percentage");
//     let intv=setInterval(function(){
//         if(count<=99){
//             count++;
//             progress.style.width=`${count}%`;
//             percentText.textContent=`${count}%`;

//         }else{
//             document.querySelector("h2").textContent="Downloaded.";
//             clearInterval(intv);

//         }

//     },(seconds*1000)/100);

//local Storage
// localStorage.setItem("name","harsh");
// let val =localStorage.getItem("name");

// localStorage.removeItem("name");
// localStorage.setItem("name","harshita");


// function setDarkOrlight(){
// if(window.matchMedia('(prefers-color-scheme: dark)').matches
// ){
//     document.body.classList.add("dark");
// }
// }setDarkOrlight();

function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}
function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme:dark").matches
        ? "dark"
        : "light";
}
function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());
}

setInitialTheme();

window.matchMedia("(prefers-color-scheme:dark)")
    .addEventListener("change", () => {
        if (!localStorage.getItem("theme")) {
            applyTheme(getSystemTheme());
        }
    })

document.querySelector("button").addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
})