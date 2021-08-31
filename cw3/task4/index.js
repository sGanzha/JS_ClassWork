//Создайте функцию user, сделайте так чтобы функция выводила в консоль контекст
//Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию,
// которая будет выводить  Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.

// Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.
// Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.
// Выведите информацию с объекта userTwo используя метод объекта userOne.

function user() {
    console.dir(this)
}

user()


const userOne = {
    firstName: 'Boris',
    lastName: 'Kutsneko',
    age: 27,
    show(phone = 'номер не указан') {
        console.log(`Привет! Я ${this.firstName} ${this.lastName}! Мой номер телефона: ${phone}`)
    }
}

// const firstName = 'Ivan'
// const lastName = 'Ivanov'

userOne.show.call(window)

const userTwo = {
    firstName: 'Ivan',
    lastName: 'Ivanov'
}

// userOne.show.call(userTwo, '2222')
userOne.show.apply(userTwo, ['2222'])