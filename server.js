const express = require('express');
const app = express()




app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, stranger ${req.params.name}`)
})

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     res.send(`Your tipwill be ${parseInt(req.params.total) / parseInt(req.params.tipPercentage)}`)
// })



const answ = [
"It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes definitely",
"You may rely on it", 
"As I see it yes", 
"Most likely", 
"Outlook good",
"Yes", 
"Signs point to yes", 
"Reply hazy try again", 
"Ask again later",
"Better not tell you now", 
"Cannot predict now", 
"Concentrate and ask again",
"Don't count on it", 
"My reply is no", 
"My sources say no",
"Outlook not so good", 
"Very doubtful"
]




app.get('/magic/:phrase/:theAnsw', (req, res) => {
    res.send(`<h1>${req.params.phrase} ${answ[req.params.theAnsw]}</h1>`)
})




app.listen(3000, () => {
    console.log('listening 3000')
});

