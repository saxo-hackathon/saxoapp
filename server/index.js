const express = require("express");
const pushRouter = require("./api/push");

const app = express();
const port = 4000;

app.use(express.json());

// app.post("/api/push/subscribe", (req, res) => {
//   const subscription = req.body;
//   res.send("subscribed!");
// });

app.use("/api/push", pushRouter);

app.get("/api/test", (req, res) => {
  res.send("Server working");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
