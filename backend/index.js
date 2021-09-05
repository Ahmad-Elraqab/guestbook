const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

const guestbookRouter = require("./routes/guestbook");

app.use("/guestbook", guestbookRouter);

app.listen(process.env.PORT || 5000, () => console.log("Server Started"));