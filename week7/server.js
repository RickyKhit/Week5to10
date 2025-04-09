const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.send("Todo added!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
