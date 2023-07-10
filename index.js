const express = require('express');
const functions = require('./functions')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 4001

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))   
app.set('view engine', 'ejs')

app.get("/", functions.getAll)
app.get("/apple/:id", functions.getOne)
app.get("/ios16", functions.ios16)
app.get("/about", functions.about)
app.get("/contact", functions.contact)



app.listen(PORT, ()=>{
    console.log(`server runned on port ${PORT}`)
})