import express from "express";

const app = express();

app.use(express.json());

app.listen(4002, () => {
  console.log("Initialized asessment server...");
});
