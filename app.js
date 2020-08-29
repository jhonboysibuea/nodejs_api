const express = require("express"); //expressJs library handle request response api
/** * App Variables */
const app = express();
const port = process.env.PORT || "8081";
/** * Routes Definitions */

//data json
var jsonProduct = {
  "status": 200,
  "message": "succes",
  "data": {
    "productId": "1",
    "productName": "omjebs"
  }
};
/** routes akan  http://localhost:80000/product */
app.get("/product", function (req, res) {
  res.status(200).json(jsonProduct);
});
/** * Server Activation */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});