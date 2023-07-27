let user = document.querySelector('.USERNAME')
let pass = document.querySelector('.PASSWORD')
let btn = document.querySelector('.btn')

let arrey = JSON.parse(localStorage.getItem("arr"))

let arr = arrey?arrey:[]
console.log(arr);
btn.addEventListener("click", Submit)
let obj = {}
function Submit(){
    obj.name = user.value
    obj.pass = pass.value
    arr.push(obj)
    localStorage.setItem("arr", JSON.stringify(arr))
console.log(arr);
}