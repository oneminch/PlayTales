import express, { RequestHandler } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello!");
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  res.send(`Hello ${productId}!`);
});

app.listen("8000", () => {
  console.log("Listening on port 8000");
});
