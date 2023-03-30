var express = require("express");
var router = express.Router();

const mysql = require("mysql2");

router.get("/", function (req, res) {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log("error: ", err);
    }

    let sql =
      "SELECT officeCode, city, addressLine1, state, country, postalCode, territory FROM offices";

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log("error: ", err);
      }

      res.status(200).json(result);
    });
  });
});

module.exports = router;
