// <!-- Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств. -->

function Calculator() {
  this.num1;
  this.num2;
}

Calculator.prototype.read = function (a, b) {
  this.num1 = a;
  this.num2 = b;
};

Calculator.prototype.sum = function () {
  return this.num1 + this.num2;
};

Calculator.prototype.mul = function () {
  return this.num1 * this.num2;
};

const test1 = new Calculator();

test1.read(
  parseInt(prompt("введіть значення 1")),
  parseInt(prompt("введіть значення 2"))
);

console.warn(test1.sum());
console.error(test1.mul());
