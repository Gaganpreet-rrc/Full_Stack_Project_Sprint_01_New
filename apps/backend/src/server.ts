import express from "express";
import searchFilterRoutes from "./routes/searchFilterRoutes";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config()

const app = express();

app.use(morgan("combined"))
app.use(cors())
app.use(express.json());

app.use(
  clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
    secretKey: process.env.CLERK_SECRET_KEY!,
  })
);


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/search-history", searchFilterRoutes);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
