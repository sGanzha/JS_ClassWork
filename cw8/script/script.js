const date = { date: `${new Date().getFullYear()} ${new Date().getMonth() + 1} ${new Date().getDate()}` };
document.cookie = `lastDate = ${date}; max-age = 2678400`// max-age жизнь куки
document.querySelector('.date').innerText = document.cookie; // вывод даты через куки
document.querySelector('.date').innerText = JSON.parse(localStorage.lastDatelocal).date;
localStorage.lastDatelocal = JSON.stringify(date);

