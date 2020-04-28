const express = require("express");
const db = require("./db");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const PORT = 4001;

app.use(cors());

// Storage
const stories = [
  {
    id: 1,
    timestamp: "09-04-2020-1",
    imagePath:
      "https://schoenes-dithmarschen.de/wp-content/uploads/2018/07/Head_0000s_0002_20160804-Brunsbüttel-Hochbrücke-4216.jpg",
    imageAlt: "Image Description",
    content: {
      header: "Header",
      subheader: "Subheader",
      body:
        "This is the full text of the Story. How many letters can I type into this string!?",
    },
  },
  {
    id: 2,
    timestamp: "09-04-2020-2",
    imagePath:
      "https://schoenes-dithmarschen.de/wp-content/uploads/2018/07/Head_0000s_0005_111211-0103_landunter-Fieler-Moor.jpg",
    imageAlt: "Image Description 2",
    content: {
      header: "Header 2",
      subheader: "Subheader 2",
      body:
        "This is the full text of the SECOND Story. How many letters can I type into this string!?",
    },
  },
];

// Utility Functions

const generateContactDate = (contactName) => {
  const currentDate = new Intl.DateTimeFormat("en-GB").format(new Date());
  let newId = `${currentDate}-${contactName}`;
  return newId;
};

const insertIntoDatabase = (table, data) => {
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
          console.log("Data inserted");
        }
      );
    }
  );
};

// Logging middleware morgan
app.use(morgan("dev"));

// Body Parsing middleware
app.use(express.json());

// GET all stories
app.get("/stories", (req, res, next) => {
  res.send(stories);
});

// GET test in browser
app.get("/", (req, res, next) => {
  res.send("Express Server running");
});

// in app.post: 1. handle requst, generate Date, send status(201) and Data back, 2. pass Data to update function with argument of "contact" name of the database TABLE
app.post("/message", (req, res, next) => {
  const body = req.body;
  const newDateName = generateContactDate(body.name);
  body.dateName = newDateName;

  // res wird nicht ausgeführt ?!?!
  res.status(201).send(body);
  insertIntoDatabase("contact", body);
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
