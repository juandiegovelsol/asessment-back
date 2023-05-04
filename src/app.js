import express from "express";
import userRoutes from "./routes/user.routes.js";
import listRoutes from "./routes/list.routes.js";
import favsRoutes from "./routes/favs.routes.js";
import cors from "cors";

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Assesment back-end API" });
});
app.use("/auth/local", userRoutes);
app.use("/api/favs", listRoutes);
app.use("/api/favs/fav", favsRoutes);

app.listen(PORT, () => {
  console.log(`Initialized asessment server on port ${PORT}...`);
});
