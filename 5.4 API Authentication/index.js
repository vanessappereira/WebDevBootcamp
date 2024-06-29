import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const credentials = {
  username: "",
  password: "",
  apiKey: "",
  bearerToken: "",
};

app.set("view engine", "ejs"); // set ejs as the view engine

app.get("/", (req, res) => {
  res.render("index", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/random`);
    res.render("index", { content: JSON.stringify(data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_URL}/all?page=2`, {
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
    const { data } = await axios.get(`${API_URL}/filter`, {
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
    const { data } = await axios.get(`${API_URL}/secrets/42`, config);
    res.render("index", { content: JSON.stringify(data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});