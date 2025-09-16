import express from "express";
import "dotenv/config";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import connectDB from "./config/db.js";

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is working"));
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
