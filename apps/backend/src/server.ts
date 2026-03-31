import express from "express";
import searchFilterRoutes from "./routes/searchFilterRoutes"
import "dotenv/config";


const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/search-history", searchFilterRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
