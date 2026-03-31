import express from "express";
import searchFilterRoutes from "./routes/searchFilterRoutes"
import "dotenv/config";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
import authRoutes from "./routes/auth.routes";


const app = express();
app.use(express.json());

const PORT = 3000;
app.use(express.json());
app.use("/api/auth", authRoutes);



app.use("/books", bookRoutes);

app.use("/search-history", searchFilterRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
