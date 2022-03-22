const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");

router.get("/jokes", async (req, res) => {
  const TABLE = "jokes";

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
