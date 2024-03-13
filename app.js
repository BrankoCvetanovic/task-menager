const express = require("express");
const app = express();
const tasksRoute = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();

app.use(express.json());

app.use("/api/v1/tasks", tasksRoute);

app.use(express.static("./public"));

const port = 3000;

async function start() {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
