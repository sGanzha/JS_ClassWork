const data = document.querySelector('.keys')
const display = document.querySelector('.display input')

const numbers = {
    first: '',
    operator: '',
    second: '',
    result: '',
    flag: false,
    memory: ''
}
data.addEventListener('click', (e) => {
    // if (Number.isInteger(+e.target.value)) {
    //     numbers.first += e.target.value
    // }
    validator(e.target.value)

})

const validator = (value) => {
    if (value.search(/\d/) !== -1 && numbers.operator === '') {
        numbers.first += value
        show(numbers.first)
    } else if (value.search(/[-+*/]/) !== -1 && value.search > 0) {
        numbers.operator = value
    } else if (value.search(/\d/) !== -1 && numbers.operator !== '') {
        numbers.second += value
        show(numbers.second)
    } else if (value === '=') {
        show(result(numbers.operator))
    } else if (value === 'm-' || value === 'm+') {
        if (numbers.flag) {
            numbers.flag = false
            show()
        } else {
            numbers.memory = numbers.first
            numbers.flag = true
            show()
        }
    } else if (value === 'mrc') {
        show(numbers.memory)
    }
}

const show = (value) => {
    debugger
    if (!value && numbers.flag) {
        document.querySelector('.display__span').style.display = 'block'
    } else if (!value && !numbers.flag) {
        document.querySelector('.display__span').style.display = 'none'
    } else {
        display.value = value
    }
}

const result = (operator) => {
    switch (operator) {
        case '+':
            return parseFloat(numbers.first) + parseFloat(numbers.second);
        case '-':
            return parseFloat(numbers.first) - parseFloat(numbers.second);
        case '*':
            return parseFloat(numbers.first) * parseFloat(numbers.second);
        case '/':
            return parseFloat(numbers.first) / parseFloat(numbers.second);
        default:
            console.error('wrong operator')
    }
}

