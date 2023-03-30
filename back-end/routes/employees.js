var express = require("express");
var router = express.Router();

const mysql = require("mysql2");

/* GET home page. */
router.get("/:officeCode", function (req, res) {
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log("error: ", err);
    }

    let officeCode = req.params.officeCode;
    let sql = `SELECT firstName, lastName, email, jobTitle FROM employees WHERE officeCode = ${officeCode}`;

    req.app.locals.con.query(sql, (err, result) => {
      if (err) {
        console.log("error: ", err);
      }

      res.status(200).json(result);
    });
  });
});

module.exports = router;
