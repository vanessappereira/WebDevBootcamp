// Use the JS getDay() to build a website that gives advide based on the day of the week.
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "cherry"],
        htmlContent: "<em> This is some em text </em>"
    }
    res.render("index.ejs", data)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})