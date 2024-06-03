import express from "express";

const app = express();
const port = 4000;

function logger(req,res,next){
  console.log("Requested Method: ", req.method);
  console.log("Requested URL: ", req.url);
  next()
}


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
