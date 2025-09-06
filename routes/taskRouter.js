const express = require("express");
const auth = require("../middleware/authMiddleware");
const { getTask, createTask, updateTask } = require("../controllers/taskController");
const router = express.Router();

// Middleware runs before the route handler, so you can check if the user is authenticated.
router.post("/", auth, createTask);
router.get("/", auth, getTask);
router.put("/:id",auth, updateTask);


module.exports = router;