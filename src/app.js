import express from "express";
import userRoutes from "./routes/user.routes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/auth/local", userRoutes);

app.listen(PORT, () => {
  console.log(`Initialized asessment server on port ${PORT}...`);
});
