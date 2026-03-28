import express from "express";
import userRoutes from "./routes/userRoutes";
import "dotenv/config";


const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
