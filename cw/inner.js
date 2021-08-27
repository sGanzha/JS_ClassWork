const data = {
    date: "27.08.2021",
    bank: "PB",
    baseCurrency: 980,
    baseCurrencyLit: "UAH",
    exchangeRate: [
        { baseCurrency: "UAH", saleRateNB: 19.4476, purchaseRateNB: 19.4476 },
        {
            baseCurrency: "UAH",
            currency: "AZN",
            saleRateNB: 15.7829,
            purchaseRateNB: 15.7829,
        },
        {
            baseCurrency: "UAH",
            currency: "BYN",
            saleRateNB: 10.6624,
            purchaseRateNB: 10.6624,
        },
        {
            baseCurrency: "UAH",
            currency: "CAD",
            saleRateNB: 21.2335,
            purchaseRateNB: 21.2335,
        },
        {
            baseCurrency: "UAH",
            currency: "CHF",
            saleRateNB: 29.2106,
            purchaseRateNB: 29.2106,
            saleRate: 29.55,
            purchaseRate: 27.95,
        },
        {
            baseCurrency: "UAH",
            currency: "CNY",
            saleRateNB: 4.13,
            purchaseRateNB: 4.13,
        },
        {
            baseCurrency: "UAH",
            currency: "CZK",
            saleRateNB: 1.2335,
            purchaseRateNB: 1.2335,
            saleRate: 1.285,
            purchaseRate: 1.085,
        },
        {
            baseCurrency: "UAH",
            currency: "DKK",
            saleRateNB: 4.2375,
            purchaseRateNB: 4.2375,
        },
        {
            baseCurrency: "UAH",
            currency: "EUR",
            saleRateNB: 31.5121,
            purchaseRateNB: 31.5121,
            saleRate: 31.7,
            purchaseRate: 31.1,
        },
        {
            baseCurrency: "UAH",
            currency: "GBP",
            saleRateNB: 36.7572,
            purchaseRateNB: 36.7572,
            saleRate: 37.3,
            purchaseRate: 35.3,
        },
        {
            baseCurrency: "UAH",
            currency: "GEL",
            saleRateNB: 8.6228,
            purchaseRateNB: 8.6228,
        },
        {
            baseCurrency: "UAH",
            currency: "HUF",
            saleRateNB: 0.09028,
            purchaseRateNB: 0.09028,
        },
        {
            baseCurrency: "UAH",
            currency: "ILS",
            saleRateNB: 8.3065,
            purchaseRateNB: 8.3065,
        },
        {
            baseCurrency: "UAH",
            currency: "JPY",
            saleRateNB: 0.24328,
            purchaseRateNB: 0.24328,
        },
        {
            baseCurrency: "UAH",
            currency: "KZT",
            saleRateNB: 0.062784,
            purchaseRateNB: 0.062784,
        },
        {
            baseCurrency: "UAH",
            currency: "MDL",
            saleRateNB: 1.5127,
            purchaseRateNB: 1.5127,
        },
        {
            baseCurrency: "UAH",
            currency: "NOK",
            saleRateNB: 3.0421,
            purchaseRateNB: 3.0421,
        },
        {
            baseCurrency: "UAH",
            currency: "PLZ",
            saleRateNB: 6.8841,
            purchaseRateNB: 6.8841,
            saleRate: 7.04,
            purchaseRate: 6.74,
        },
        {
            baseCurrency: "UAH",
            currency: "RUB",
            saleRateNB: 0.36172,
            purchaseRateNB: 0.36172,
            saleRate: 0.38,
            purchaseRate: 0.35,
        },
        {
            baseCurrency: "UAH",
            currency: "SEK",
            saleRateNB: 3.078,
            purchaseRateNB: 3.078,
        },
        {
            baseCurrency: "UAH",
            currency: "SGD",
            saleRateNB: 19.7933,
            purchaseRateNB: 19.7933,
        },
        {
            baseCurrency: "UAH",
            currency: "TMT",
            saleRateNB: 7.6619,
            purchaseRateNB: 7.6619,
        },
        {
            baseCurrency: "UAH",
            currency: "TRY",
            saleRateNB: 3.2007,
            purchaseRateNB: 3.2007,
        },
        {
            baseCurrency: "UAH",
            currency: "UAH",
            saleRateNB: 1.0,
            purchaseRateNB: 1.0,
        },
        {
            baseCurrency: "UAH",
            currency: "USD",
            saleRateNB: 26.7744,
            purchaseRateNB: 26.7744,
            saleRate: 27.0,
            purchaseRate: 26.6,
        },
        {
            baseCurrency: "UAH",
            currency: "UZS",
            saleRateNB: 0.0025239,
            purchaseRateNB: 0.0025239,
        },
    ],
};

data.exchangeRate.forEach((elem) => console.log(elem));

const create = function (teg) {
    return document.createElement(teg);
};

const root = document.getElementById("root");

const table = create("table"),
    tr = create("tr"),
    td = create("td"),
    td1 = create("td"),
    td2 = create("td"),
    tbody = create("tbody");

td.innerText = "Название валюты";
td1.innerText = "покупка";
td2.innerText = "Продажа";

table.append(tbody);
tbody.append(tr);
tr.append(td, td1, td2);

root.append(table);

data.exchangeRate.forEach((elem) => {
    let tr = create("tr"),
        td = create("td"),
        td1 = create("td"),
        td2 = create("td");

    td.innerText = elem.currency;
    td1.innerText = elem.purchaseRateNB.toFixed(2);
    td2.innerText = elem.saleRateNB.toFixed(2);

    tr.append(td, td1, td2);
    tbody.append(tr);
});
