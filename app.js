const express = require("express");
const db = require("./db");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const PORT = 4001;

app.use(cors());

// Logging middleware morgan
app.use(morgan("dev"));

// Body Parsing middleware
app.use(express.json());

// Utility Functions

const generateContactDate = (contactName) => {
  const currentDate = new Intl.DateTimeFormat("en-GB").format(new Date());
  let newId = `${currentDate}-${contactName}`;
  return newId;
};

const insertIntoDatabase = (data, res) => {
  db.run(
    "CREATE TABLE IF NOT EXISTS contact (id INTEGER PRIMARY KEY, date_name STRING NOT NULL, name STRING, email STRING NOT NULL, message STRING)",
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      db.run(
        "INSERT INTO contact (date_name, name, email, message) VALUES ($date_name, $name, $email, $message)",
        {
          $date_name: data.dateName,
          $name: data.name,
          $email: data.email,
          $message: data.message,
        },
        (err) => {
          if (err) {
            console.log(err);
          }
          // call nodemailer, send mail and set column mail_sent to 1 (true)
          res.send(data);
        }
      );
    }
  );
};

// Middleware for get /stories -- database request
app.use("/stories", (req, res, next) => {
  db.all("SELECT * FROM stories", (err, rows) => {
    if (err) {
      console.log(err);
    }
    req.data = rows;
    next();
  });
});

// GET all stories
app.get("/stories", (req, res, next) => {
  if (req.data) {
    res.send(req.data);
  } else {
    res.status(404).send("Not found");
  }
});

// GET test in browser
app.get("/", (req, res, next) => {
  res.send("Express Server running");
});

app.post("/message", (req, res, next) => {
  const body = req.body;
  const newDateName = generateContactDate(body.name);
  body.dateName = newDateName;

  insertIntoDatabase(body, res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
