const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");

const TABLE = "jokes";

router.get(`/${TABLE}`, async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = `SELECT * from ${TABLE}`;
      conn.query(qry, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

router.post(`/${TABLE}`, async (req, res) => {
  const id = req.body.id;
  const value = req.body.value;

  pool.getConnection((err, conn) => {
    if (err) throw err;

    const qry = `INSERT INTO ${TABLE}(id, value, date) VALUES(?,?,NOW())`;
    conn.query(qry, [id, value], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Joke added!", result);
    });

    res.redirect("/jokes");
    res.end();
  });
});

module.exports = router;
