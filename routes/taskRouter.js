const express = require("express");
const auth = require("../middleware/authMiddleware");
const { getTask, createTask, updateTask, deleteTask, updateStatus } = require("../controllers/taskController");
const router = express.Router();

// Middleware runs before the route handler, so you can check if the user is authenticated.
router.post("/", auth, createTask);
router.get("/", auth, getTask);
router.put("/:id",auth, updateTask);
router.delete("/:id",auth, deleteTask);
router.patch("/status/:id", auth, updateStatus);


module.exports = router;