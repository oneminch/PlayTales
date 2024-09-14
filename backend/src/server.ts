import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRouter from "./routes/auth.router";
import productsRouter from "./routes/products.router";
import searchRouter from "./routes/search.router";
import userRouter from "./routes/user.router";

import verifyToken from "./middleware/verifyToken";

const app = express();

const PORT = process.env.PORT || 8888;

const frontendDir = path.join(__dirname, "..", "public");

app.use(express.static(frontendDir));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Initialize DB with Demo Data
// app.use("/init", initRouter);

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/search", searchRouter);
app.use("/api/user", verifyToken, userRouter);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
