const express = require("express");
const port = 8000;
const app = express();
app.get("/", (req, res) => res.send("hello vikas"));
app.listen(port, () => console.log(`server running on ${port}`));
