const express = require("express"); //expressJs library handle request response api
/** * App Variables */
const app = express();
const port = process.env.PORT || "8081";
var path = require('path');
/** * Routes Definitions */


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
  var jsonProduct = {
    "status": 200,
    "message": "succes",
    "data": [{
      "productId": "1",
      "productName": "omjebs"
    }]
  };

  res.render('pages/product', {
    productList: jsonProduct
  })
});

/** * Server Activation */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});