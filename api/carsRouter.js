const express = require("express");
const router = express.Router();

const db = require("../data/dbConfig.js");

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((ids) => {
      res.status(201).json({ created: ids });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.get("/", (req, res) => {
  // user can search by vin number 
  if(req.body.vin){
    db("cars")
      .select('*')
      .where('vin', req.body.vin)
      .then( cars =>{
        res.status(200).json({cars})
      })
      .catch( err=>{
        console.log(err);
        res.status(500).json(err)
      })
  } else {
    db("cars")
      .select("*")
      .then((cars) => {
        res.status(200).json({ cars });
      })
      .catch( err=>{
        console.log(err);
        res.status(500).json(err)
      })
  }
});

router.put("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .update(req.body)
    .then((count) => {
      res.status(200).json({ updated: count });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .del()
    .then((count) => {
      res.status(200).json({ deleted: count });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
});

module.exports = router;
