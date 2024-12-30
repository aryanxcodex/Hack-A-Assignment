import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
