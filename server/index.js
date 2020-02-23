const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

//sendgrid api key
sgMail.setApiKey(
  "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"
);

app.use(cors());

// Welcome page of the express server:
app.get("/", (req, res) => {
  res.send("Welcome to the Sendgrid Emailing Server");
});

app.get("/send-email", (req, res) => {
  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query;

  //Sendgrid Data Requirements
  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text
  };

  //Send Email
  sgMail.send(msg).then(msg => console.log(text));
});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000"));
