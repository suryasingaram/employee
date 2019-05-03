const db = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const enableCORS = function(request, response, next) {
  response.header("Access-Control-Allow-Origin", request.headers.origin);
  response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  response.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Date, X-Date"
  );
  return next();
};
app.use(cors());
app.use(
  bodyParser.urlencoded({
    limit: "1000mb"
  })
);
app.use(
  bodyParser.json({
    limit: "1000mb"
  })
);

var Employee = require("./employee");

app.get("/getEmployee", function(req, res) {
  Employee.find({},
    function(err, employees) {
      if (err) {
        res.send(err);
      } else {
        res.json(employees);
      }
    }
  );
});
app.post("/addEmployee", function(req, res) {
  var employee = new Employee(req.body);

  employee.save(function(err) {
    if (err) {
      let message = err.message.split("Path");
      res.status(400).json({ message: message[1] });
    } else {
      res.json({
        message: "Employee data added successfully"
      });
    }
  });
});

module.exports = app;
app.listen(4000);
// listen (start app with node server.js) ======================================
console.log("App listening on port 4000");
