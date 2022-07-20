const { use } = require("chai");
const express = require("express");
const app = express();
const utils = require("./utils/task-schema.js");

app.use(expresss.jsons());

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
    
// POST 

// PUT 

// PATCH 

// DELETE 