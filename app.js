const express = require("express"); //expressJs library handle request response api
/** * App Variables */
const app = express();
const request = require('request');
const controller = require('./controller')
const port = process.env.PORT || "8081";
const bodyParser = require('body-parser')
var path = require('path');
/** * Routes Definitions */

app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('pages/homepage')
});

/** routes akan  http://localhost:80000/product */
app.get("/product", function (req, res) {
  //data json

  getProduct(function (err, data) {

    if (err) {
      return res.send(err);
    } else {
      var product = JSON.parse(data);
      res.render('pages/product', {
        productList: product
      })
    }
  });




});

app.get('/api/products', controller.product)
/** * Server Activation */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});



function getProduct(callback) {
  request('http://localhost:8081/api/products', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      result = JSON.stringify(JSON.parse(body));
      return callback(false, result);
    } else {
      return callback(true, error);;
    }
  });
}