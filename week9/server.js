const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const formSubmissions = [];

app.get("/", (req, res) => {
  res.redirect("/contact");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    message: null,
    formData: null,
  });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.render("contact", {
      message: "All fields are required!",
      formData: req.body,
    });
  }

  if (!email.includes("@")) {
    return res.render("contact", {
      message: "Please enter a valid email!",
      formData: req.body,
    });
  }

  const newSubmission = {
    name,
    email,
    message,
    date: new Date().toLocaleString(),
  };
  formSubmissions.push(newSubmission);

  res.render("confirmation", {
    name,
    email,
    message,
    submissions: formSubmissions,
  });
});

app.listen(port, () => {
  console.log(`Contact form running on http://localhost:${port}`);
});
