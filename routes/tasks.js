const Task = require("../models/task");
const express = require("express");
const router = express.Router();
const asyncWraper = require("../middleware/async");

router.get(
  "/",
  asyncWraper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  })
);

router.post(
  "/",
  asyncWraper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  })
);

router.get(
  "/:id",
  asyncWraper(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "Could not find task with that id " });
    }
    res.status(200).json({ task });
  })
);
router.patch(
  "/:id",
  asyncWraper(async (req, res) => {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: "Could not find task with that id " });
    }
    res.status(200).json({ task });
  })
);

router.delete(
  "/:id",
  asyncWraper(async (req, res) => {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "Could not find task with that id " });
    }
    res.status(200).json({ task });
  })
);

module.exports = router;
