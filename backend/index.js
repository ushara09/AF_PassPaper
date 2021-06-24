const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const subjectAPI = require("./src/api/subject.api");
const courseAPI = require("./src/api/course.api");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const DBURL = "mongodb://localhost/AFSE2018";
const url =
  "mongodb+srv://ApplicationFramework:ApplicationFramework@affinal.0r7fj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  url,
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

app.use("/subject", subjectAPI());
app.use("/course", courseAPI());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
