import express from "express";
import userRoutes from "./routes/user.routes.js";
import listRoutes from "./routes/list.routes.js";
import favsRoutes from "./routes/favs.routes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/auth/local", userRoutes);
app.use("/api/favs", listRoutes);
app.use("/api/favs/fav", favsRoutes);

app.listen(PORT, () => {
  console.log(`Initialized asessment server on port ${PORT}...`);
});
