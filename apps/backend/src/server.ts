import express from "express";
import searchFilterRoutes from "./routes/searchFilterRoutes";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bookRoutes from "./routes/bookRoutes";
import { clerkAuth, attachAuth } from "./middleware/auth";

dotenv.config()

const app = express();

app.use(morgan("combined"))

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY!,
    secretKey: process.env.CLERK_SECRET_KEY!,
  })
);

app.use(clerkAuth);
app.use(attachAuth);


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/search-history", searchFilterRoutes);

app.use("/books", bookRoutes);

const PORT = 3000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
