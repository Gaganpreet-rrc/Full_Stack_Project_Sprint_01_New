import express from "express";
import authRoutes from "../src/routes/auth.routes"
import "dotenv/config";

const app = express();
app.use(express.json());

const PORT = 3000;
app.use(express.json());
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
