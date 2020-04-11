const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 4001;

// if it does not work, try relative path to itellu-react ('../itellu-react')
//app.use(express.static("itellu-react"));

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

// GET all stories
app.get("/stories", (req, res, next) => {
  res.send(stories);
});

app.get("/", (req, res, next) => {
  res.send("Express Server running");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
