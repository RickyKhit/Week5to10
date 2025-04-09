const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const projects = [
  {
    title: "Reviews Hub",
    description: "Honest reviews app for movie lovers.",
    image: "https://i.ibb.co/YTNG1v19/rh.png",
    technologies: ["JavaScript", "Node.js", "CSS"],
  },
  {
    title: "Fake News",
    description: "Funny news app.",
    image: "https://i.ibb.co/bjgddpf7/fn.png",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Recipe Page",
    description: "Just chicken recipe.",
    image: "https://i.ibb.co/q368LBvk/rp.png",
    technologies: ["HTML", "CSS"],
  },
];

const blogPosts = [
  {
    title: "Why I Love Coding",
    content:
      "Coding is like solving puzzles. Every problem is a new challenge that exercises your brain and creativity. The satisfaction of seeing your code come to life is unparalleled. Whether it's building a simple website or a complex application, the process of turning ideas into reality through code is incredibly rewarding.",
    date: "March 15, 2025",
    author: "Ricky",
  },
  {
    title: "Top 5 JavaScript Tricks",
    content:
      "1. Destructuring - Extract values from arrays or objects easily. 2. Arrow functions - Concise syntax for writing functions. 3. Template literals - Easy string interpolation with multi-line support. 4. Spread operator - Expand arrays or objects with simple syntax. 5. Optional chaining - Safely access nested properties without worrying about null references.",
    date: "April 2, 2025",
    author: "Ricky",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    projects,
    blogPosts,
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    projects,
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    blogPosts,
  });
});

app.listen(port, () => {
  console.log(`Portfolio running on http://localhost:${port}`);
});
