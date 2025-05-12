import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();

  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to have some fun";

  if (day == 0 || day == 6) {
    type = "the weekend";
    adv = "it's time to some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
