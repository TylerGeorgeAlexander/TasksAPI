const express = require("express");
const app = express();
const utils = require("./utils/task-schema.js");

app.use(express.json());

const tasks = [
  {
    id: 1,
    name: "Task 1",
    completed: false,
  },
  {
    id: 2,
    name: "Task 2",
    completed: false,
  },
  {
    id: 3,
    name: "Task 3",
    completed: false,
  },
];

// GET
app.get("/api/tasks", (request, response) => {
  response.send(tasks);
});

// GET (by id)
app.get("/api/tasks/:id" , (request, response) => {
  const taskId = request.params.id;
  const task = tasks.find(task => task.id === parseInt(taskId));
  if(!task) return response.status(404).send("The task with the provided ID does not exist.");
  response.send(task);
})

// POST 

// PUT 

// PATCH 

// DELETE 


const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));