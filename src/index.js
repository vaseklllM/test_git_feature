const express = require("express")
const config = require("config")
const mongoose = require("mongoose")

const { cashFlow } = require("./assets/cashFlow")
const Schema = mongoose.Schema

const PORT = config.get("port")
const dbName = config.get("dbName")

var app = express()

// підключення до бази даних
mongoose.connect("mongodb://localhost:27017/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const cashFlowItemSchema = new Schema({
    name: { type: String, default: "Name" },
    price: Number,
    pcs: Number,
    income: Number,
    rate: String,
    dateBuy: { type: Date, default: Date.now }
})

// перевірка чи підключення пройшло успішно
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function() {
    setDataFromCashFlow()

})

app.get("/", function(req, res) {
    res.send(cashFlow)
})

app.listen(PORT, () =>
    console.log(`Server has been started on port: http://localhost:${PORT}/`)
)

function createDb(cashFlow) {
    db.createCollection("full")
    const full = mongoose.model("cashFlow", cashFlowItemSchema, "full")

    if (Array.isArray(cashFlow)) {
        cashFlow.forEach(el => {
            const newItem = new full({
                ...el,
                dateBuy: new Date(el.dateBuy)
            })
            newItem.save()
        })
    }
    console.log("successful create")
}

function getDateFromCashFlow() {
    const full = mongoose.model("cashFlow", cashFlowItemSchema, "full")
    full.find({name: 'Загальні витрати'},(err, date)=>{
        console.log(date);
    })
}

function setDataFromCashFlow(){
    const full = mongoose.model("cashFlow", cashFlowItemSchema, "full")
    // full.findByIdAndUpdate('5e1cff9df2862e0af44a6f34', {name: 'test2'}, (err, res)=>{
    //     console.log(res);
    // })
    full.findOne({type: 'test2'}, (err, res)=>{
        console.log(res);
    })
}