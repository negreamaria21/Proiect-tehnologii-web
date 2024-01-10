const express = require("express");
const router = require("./routes");
const cors = require("cors");
const connection = require("./models").connection;
const PORT = 1301;
const app = express();
const Sequelize = require("sequelize"); 

app.use(express.json());
app.use(cors());

app.get("/reset", (req, res) => {
    connection
      .sync({ force: true })
      .then(() => {
        res.status(200).send({ message: "Database reset completed!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Database reset failed!" });
      });
  });
  

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})

