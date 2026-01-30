import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Da Little Aloha Show API" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/cloudinary/status", (req, res) => {
  const { cloud_name: cloudName } = cloudinary.config();

  res.json({
    configured: Boolean(process.env.CLOUDINARY_URL),
    cloudName: cloudName || null,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
