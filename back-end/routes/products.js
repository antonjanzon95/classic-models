var express = require("express");
var router = express.Router();

const mysql = require("mysql2");

router.get("/", (req, res) => {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log("error: ", err);
    }

    let sql =
      "SELECT productName, productDescription, quantityInStock, buyPrice FROM products";

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log("error: ", err);
      }

      res.status(200).json(result);
    });
  });
});

router.get("/categories", (req, res) => {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log("error: ", err);
    }

    let sql = `SELECT DISTINCT productLine FROM products`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log("error: ", err);
      }

      res.status(200).json(result);
    });
  });
});

router.get("/:category", (req, res) => {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log("error: ", err);
    }

    let category = req.params.category;
    let sql = `SELECT * FROM products WHERE productLine="${category}"`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log("error: ", err);
      }

      res.status(200).json(result);
    });
  });
});

module.exports = router;
