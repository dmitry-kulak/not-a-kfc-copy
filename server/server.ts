import express from "express";
import path from "path";

import { burgers } from "./burgers";

const app = express();
const port = process.env.PORT || 3001;

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/api/burgers/", (req, res) => {
  res.send(burgers);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
