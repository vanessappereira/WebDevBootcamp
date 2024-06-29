import express from "express";
import bodyParser from "body-parser";
import fs from "fs";


const app = express();
const port = 3000;

let recipeJSON;

fs.readFile("recipe.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  recipeJSON = data.toString();
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { recipe: data });
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  switch (req.body.choice) {
    case "chicken":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "beef":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "fish":
      data = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
