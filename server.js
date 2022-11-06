const express = require('express');
const app = express()




app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, stranger ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tipwill be ${parseInt(req.params.total) / parseInt(req.params.tipPercentage)}`)
})


app.listen(3000, () => {
    console.log('listening 3000')
});

