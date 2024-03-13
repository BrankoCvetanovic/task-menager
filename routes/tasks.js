const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all tasks");
});

router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});
router.get("/:id", (req, res) => {
  res.json({ id: req.params.id });
});
router.patch("/:id", (req, res) => {
  res.json({ id: req.params.id });
});
router.delete("/:id", (req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
