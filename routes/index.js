import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

router.post("/todos", async (req, res) => {
  const { title, description } = req.body;

  try {
    const todo = await Todo.create({ title, description });
    res.json(todo);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const todo = await Todo.findByPk(id);
    await todo.update({ title, description, completed });
    res.json(todo);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    await todo.destroy();
    res.json({ message: "Запись успешно удалена" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;