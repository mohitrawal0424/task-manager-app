const express = require("express");
const router = new express.Router();
const {addTask, getTasks, getTask, deleteTask, updateTask} = require("../contollers/taskController")

router.post("/tasks", addTask)
router.get("/tasks", getTasks)
router.get("/tasks/:id", getTask)
router.delete("/tasks/:id", deleteTask)
router.put("/tasks/:id", updateTask)

module.exports = router;