const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/students", (req, res) => {
  const { name, email, course } = req.body;

  const sql =
    "INSERT INTO students(name,email,course) VALUES(?,?,?)";

  db.query(sql, [name, email, course], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Student Added Successfully"
    });
  });
});

app.get("/students", (req, res) => {
  db.query(
    "SELECT * FROM students",
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json(result);
    }
  );
});

app.delete("/students/:id", (req, res) => {
  db.query(
    "DELETE FROM students WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Deleted Successfully"
      });
    }
  );
});

app.listen(3000, () => {
  console.log("Server Running at http://localhost:3000");
});