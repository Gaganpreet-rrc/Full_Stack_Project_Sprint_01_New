import express from "express";
import searchFilterRoutes from "./routes/searchFilterRoutes";
import "dotenv/config";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bookRoutes from "./routes/bookRoutes";
import libraryTipsRoutes from "./routes/libraryTipsRoutes";

import { clerkMiddleware } from "@clerk/express";
import { clerkAuth, attachAuth } from "./middleware/auth";

dotenv.config();

const app = express();

app.use(morgan("combined"));
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,              
  })
);

app.use(morgan("combined"))

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  clerkMiddleware({
    debug: true,
  })
);
app.use(clerkAuth);
app.use(attachAuth);


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/search-history", searchFilterRoutes);
app.use("/books", bookRoutes);
app.use("/api/library-tips", libraryTipsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});