var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const mysql = require("mysql2");

var indexRouter = require("./routes/index");
var customersRouter = require("./routes/customers");
var employeesRouter = require("./routes/employees");
var officesRouter = require("./routes/offices");
var orderdetailsRouter = require("./routes/orderdetails");
var ordersRouter = require("./routes/orders");
var paymentsRouter = require("./routes/payments");
var productsRouter = require("./routes/products");
var productlinesRouter = require("./routes/productlines");

var app = express();

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "classicmodels",
  password: "classicmodels",
  database: "classicmodels",
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/customers", customersRouter);
app.use("/employees", employeesRouter);
app.use("/offices", officesRouter);
app.use("/orderdetails", orderdetailsRouter);
app.use("/orders", ordersRouter);
app.use("/payments", paymentsRouter);
app.use("/products", productsRouter);
app.use("/productlines", productlinesRouter);

module.exports = app;
