const { generationTodayDate } = require("../utils")

const cashFlow = [
    {
        name: "Акции Гугл",
        pcs: 159,
        price: 6,
        income: 10,
        currency: "$",
        rate: "USD",
        dateBuy: "9-10-2019",
        id: 1
    },
    {
        name: "Загальні витрати",
        pcs: 1,
        price: 0,
        income: -4000,
        currency: "₴",
        rate: "UAH",
        dateBuy: "4-13-2018",
        id: 2
    },
    {
        name: "ICO DEEX",
        pcs: 2,
        price: 0.03,
        income: 0,
        currency: "₿",
        rate: "BTC",
        dateBuy: "5-18-2013",
        id: 3
    }
]

const defaultItem = {
    name: "name",
    pcs: 1,
    price: 0,
    income: 0,
    currency: "₴",
    rate: "UAH",
    dateBuy: generationTodayDate()
}

module.exports = { cashFlow, defaultItem }
