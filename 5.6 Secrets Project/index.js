// HINTS:
// 1. Import express and axios
import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// 2. Create an express app and set the port number.
const app = express();
const port = process.env.PORT || 3000;

// Load environment variables from.env file
dotenv.config({ path: '../.env' });

// 3. Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        // 5. Use axios to get a random secret and pass it to index.ejs to display the secret and the username of the secret.
        res.render("index.ejs", { secret: result.data.secret, user: result.data.username });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});
// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
