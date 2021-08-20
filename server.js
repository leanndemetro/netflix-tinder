const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/netflixLogin", { useNewUrlParser: true });


app.use("/users", require("./routes/userRouter"))


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
