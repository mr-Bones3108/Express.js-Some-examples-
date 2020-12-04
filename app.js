const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000


//body parser is use to convert the data into various forms which can be used
// bodyparser types
// app.use(bodyParser.text())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
}); 
app.post('/', (req, res) => {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;
res.send('The result is ' + result);
}); 

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator', (req, res) => {
var Weight = parseFloat(req.body.Weight);
var Height = parseFloat(req.body.Height);

var bmi = Weight / (Height * Height);
res.send("Your bmi is " + bmi);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})