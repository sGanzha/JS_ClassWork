const select = document.getElementById("select");
// добавляємо подію на випадаючий список
select.onchange = function (ivent) { 
  // отримуємо дочірні елементи за допомогою деструктиризації
    const [...arr] = ivent.target.children;
    // фільтруємо масив для того щоб отримати потрібний елемент
    const [ option ]= arr.filter(option => {
   return option.selected;
    })
    console.log(option.value)

    document.body.style.backgroundColor = option.value;
    document.cookie = `bodyColor = ${option.value}; max-age = 1000000000000000`
}
document.querySelector("[type=number]").onchange = function () {
document.querySelector("html").style.fontSize = this.value +"px";
document.cookie =  `htmlSize = ${this.value}; max-age = 1000000000000000`
}


// const [...arr] = select.children
// arr.forEach(element => {
//    element.onclick = function (event) {
//        console.log(this);
//    } 
// });