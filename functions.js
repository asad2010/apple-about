const fs = require('fs');
module.exports = {
    getOne: (req,res)=>{
        fs.readFile('./data.json', 'utf-8', (err,data)=>{
            if(err) return res.status(500).send({message: error.message})
            try {
                data = JSON.parse(data)
                const findData = data.find(el=> el.id === req.params.id)
                res.render('info', {findData})
            } catch (error) {
                res.status(500).send({message: error.message})
            }
        })
        
    },
    getAll: (req,res)=>{
        fs.readFile('./data.json', 'utf-8', (err,data)=>{
            if(err) return res.status(500).send({message: error.message})
            try {
                data = JSON.parse(data)
                res.render('index', {data})
            } catch (error) {
                res.status(500).send({message: error.message})
            }
        })
        
    },
    ios16: (req,res)=>{
        res.render("ios16")
    },
    about: (req,res)=>{
        res.render('about')
    },
    contact: (req,res)=>{
        res.render('contact')
    }
}