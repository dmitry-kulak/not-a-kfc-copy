import express from "express";
import path from "path";

import { burgers } from "./burgers";

const app = express();
const port = process.env.PORT || 3001;

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());

app.get("/api/burgers/", (req, res) => {
  res.send(burgers);
});

app.post("/api/cart/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
