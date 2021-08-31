// Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь. 
// Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().

const arr = [1, 2, 4, 5, 6, 7];

Array.prototype.myMethod = function(num) {
    return this.map(function(item, i, array){
       return item*num
    })
}
console.log(arr.myMethod(2));