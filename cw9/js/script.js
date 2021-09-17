// CW
// 1 Создать приложение курс валют (Оформить аналог табло обмена валют). Курс брать с API НБУ и встроить в свое приложение.
// 2 Создайте приложение, в котором пользователь будет отправлять запрос по
//  адресу: https://bank.gov.ua/NBUStatService/v1/staw 
//  получать текущий курс гривны по отношению к иностранным валютам. 
//  Отфильтруйте полученный список по уровню курса - только те элементы, 
//  у которых курс больше 25грн. В случае ошибки - укажите ее пользователю 
//  в теле документа. В случае успеха - предоставите вывод данных в виде таблицы.

window.addEventListener('DOMContentLoaded', function () {
    let date,
        table = document.querySelector('table > tbody');


function request(url, callback) {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url);
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status >= 200 && ajax.status < 300) {
            callback(JSON.parse(ajax.responseText));
        }
    }
    ajax.send();
};

request('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', show);

function show(data) {
    console.log(data);
    data.filter(item => {
        return item.rate > 25;
    }).forEach(element => {
        const tr1= document.createElement('tr'),
        td1=document.createElement('td'),
        td2=document.createElement('td');
        td1.innerHTML=element.txt;
        td2.innerHTML=element.rate;
        tr1.append(td1,td2);
        table.append(tr1);
    });
    // console.log(bigger);
    
}



async function requsetFetch(url) {

    const date = await fetch(url);
    return date.json();
}

requsetFetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then((item) => {
    show(item);
});

});