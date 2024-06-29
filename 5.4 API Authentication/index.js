import express from "express";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from.env file
dotenv.config({path:'../.env'}); 

const app = express();
const port = 3000;

const credentials = {
  username: process.env.yourUsername,
  password: process.env.yourPassword,
  apiKey: process.env.yourAPIKey,
  bearerToken: process.env.yourBearerToken,
  API_URL: process.env.API_URL,
};

app.set("view engine", "ejs"); // set ejs as the view engine

app.get("/", (req, res) => {
  res.render("index", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/random`);
    res.render("index", { content: JSON.stringify(data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/all?page=2`, {
      auth: {
        username: credentials.username,
        password: credentials.password,
      },
    });
    res.render("index", { content: JSON.stringify(data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.API_URL}/filter`, {
      params: {
        score: 5,
        apiKey: credentials.apiKey,
      },
    });
    res.render("index", { content: JSON.stringify(data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${credentials.bearerToken}` },
    };
    const { data } = await axios.get(`${process.env.API_URL}/secrets/42`, config);
    res.render("index", { content: JSON.stringify(data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});