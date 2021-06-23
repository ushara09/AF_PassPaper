const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const DBURL = "mongodb://localhost/AFSE2018";

mongoose.connect(
  DBURL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (error) => {
    if (error) {
      console.log("Database Error : ", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Conneted");
});

app.get("/", (req, res) => {
  res.send("Hello World !!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
