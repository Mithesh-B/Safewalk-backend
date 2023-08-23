const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/userdata")

app.use(express.json());

// Use the cors middleware to allow requests from all origins
app.use(cors());

app.get("/allUserData", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/userData", async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
      
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
  }
});

mongoose
  .connect("mongodb://127.0.0.1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => console.log("Server Started"));
  })
  .catch((error) => {
    console.log(error);
  });
