import express from "express";
import userRoutes from "./routes/userRoutes";
import "dotenv/config";

import cors from "cors";
import bookRoutes from "./routes/bookRoutes";

const app = express();
app.use(express.json());

const PORT = 3000;
app.use(express.json());

app.use("/books", bookRoutes);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
