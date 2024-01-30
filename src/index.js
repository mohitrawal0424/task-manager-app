const express = require('express');
const app = express();
const TASK = require("./modals/task")
require("./db/db")
require("../.env")
const taskRoute = require("./routes/taskRoutes")

app.use(express.json());

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

app.use(taskRoute);
