const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('bmi', { bmiResult: null, age: null, weight: null, height: null });
});



app.post('/', (req, res) => {
  let age = req.body.age;
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  console.log('Weight:', weight);
  console.log('Height:', height);

  let bmiResult = ((weight / height / height)*10000).toFixed(1);

  console.log('BMI',bmiResult);

  res.render('bmi', { bmiResult, age, weight, height });
  console.log("rendered result");
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});
