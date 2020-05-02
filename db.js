const sqlite = require("sqlite3");

const db = new sqlite.Database("./db.sqlite");

module.exports = db;

/*
db.run(
  "CREATE TABLE stories (id PRIMARY KEY, timestamp STRING, imagePath STRING, imageAlt STRING, header STRING, subheader STRING, body STRING, type STRING)"
);
*/

/*
const stories = [
  {
    id: 1,
    timestamp: "09-04-2020-1",
    imagePath:
      "https://schoenes-dithmarschen.de/wp-content/uploads/2018/07/Head_0000s_0002_20160804-Brunsbüttel-Hochbrücke-4216.jpg",
    imageAlt: "Image Description",
    type: "latest",
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
    type: "latest",
    content: {
      header: "Header 2",
      subheader: "Subheader 2",
      body:
        "This is the full text of the SECOND Story. How many letters can I type into this string!?",
    },
  },
  {
    id: 3,
    timestamp: "09-04-2020-3",
    imagePath:
      "https://drive.google.com/uc?id=1NNhUyuROWkpdjPD60vTPQG_59ncB0uqU",
    imageAlt: "Image Description",
    type: "latest",
    content: {
      header: "Klippe in Bolivien - am Stadtrand",
      subheader: "Mega-City in South America",
      body: "Example Body Text - Klippe",
    },
  },
  {
    id: 4,
    timestamp: "09-04-2020-4",
    imagePath:
      "https://drive.google.com/uc?id=1OYhZOlIxoNPfGRGmYUUuqoB5bPHDOSHj",
    imageAlt: "Image Description",
    type: "recom",
    content: {
      header: "Küste in Bolivien - grünes Weideland",
      subheader: "Natur in South America",
      body: "Example Body Text - Küste",
    },
  },
  {
    id: 5,
    timestamp: "09-04-2020-5",
    imagePath:
      "https://drive.google.com/uc?id=1tv_QxJKNJ48i2ZOFimGeIH_IQFtCeJP2",
    imageAlt: "Image Description",
    type: "recom",
    content: {
      header: "Stadt in Peru - von Oben",
      subheader: "Mega-City in South America",
      body: "Example Body Text - Stadt",
    },
  },
];

stories.forEach((story) => {
  db.run(
    "INSERT INTO stories (id, timestamp, imagePath, imageAlt, header, subheader, body, type) VALUES ($id, $timestamp, $imagePath, $imageAlt, $header, $subheader, $body, $type)",
    {
      $id: story.id,
      $timestamp: story.timestamp,
      $imagePath: story.imagePath,
      $imageAlt: story.imageAlt,
      $type: story.type,
      $header: story.content.header,
      $subheader: story.content.subheader,
      $body: story.content.body,
    }
  );
});
*/
