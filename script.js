// ====All btn

let zeroBtn = document.querySelector(".zero")
let oneBtn = document.querySelector(".one")
let twoBtn = document.querySelector(".two")
let threeBtn = document.querySelector(".three")
let fourBtn = document.querySelector(".four")
let fiveBtn = document.querySelector(".five")
let sixBtn = document.querySelector(".six")
let sevenBtn = document.querySelector(".seven")
let eightBtn = document.querySelector(".eight")
let nineBtn = document.querySelector(".nine")

let fullStopbtn =document.querySelector(".fullStop")
let jogBtn = document.querySelector(".plus")
// console.log(plusBtn);
let minusBtn = document.querySelector(".minus")
let multipliBtn = document.querySelector(".multiplication")

let divideBtn = document.querySelector(".divide")
let equalBtn = document.querySelector(".assign")
let deleteBtn = document.querySelector(".delete")
let resetBtn = document.querySelector(".reset")
let inputBox = document.querySelector (".inputbox")
let heading = document.querySelector("h3")

// ====btn click

zeroBtn.addEventListener("click",function () {
    inputBox.value += `0`;
})
oneBtn.addEventListener("click",function () {
    inputBox.value += `1`;
})
twoBtn.addEventListener("click",function () {
    inputBox.value += `2`;
})
threeBtn.addEventListener("click",function () {
    inputBox.value += `3`;
})
fourBtn.addEventListener("click",function () {
    inputBox.value += `4`
})
fiveBtn.addEventListener("click",function () {
    inputBox.value += `5`;
})
sixBtn.addEventListener("click",function () {
    inputBox.value += `6`;
})
sevenBtn.addEventListener("click",function () {
    inputBox.value += `7`;
})
eightBtn.addEventListener("click",function () {
    inputBox.value += `8`;
})
nineBtn.addEventListener("click",function () {
    inputBox.value += `9`
})
jogBtn.addEventListener("click",function () {
    inputBox.value += " + "
})
minusBtn.addEventListener("click",function () {
    inputBox.value += ` - `
})
multipliBtn.addEventListener("click",function () {
    inputBox.value += ` * `;
})
divideBtn.addEventListener("click",function () {
    inputBox.value += ` / `
})
fullStopbtn.addEventListener("click",function () {
    inputBox.value += `.`
})
resetBtn.addEventListener("click",function () {
    inputBox.value = "";
})
deleteBtn.addEventListener("click",function () {
    inputBox.value = `Can't use delete`
})
equalBtn.addEventListener("click",function () {
    let outPut = inputBox.value;
    let equalCal = eval(outPut);
    inputBox.value = equalCal;
})




