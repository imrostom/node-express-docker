const express = require("express");
const { LOCATION } = process.env;

// Constants
const PORT = process.env.PORT ?? 3000;

// App
const app = express();

app.get("/", (req, res) => {
    res.send(`My Location is ${LOCATION}`);
});

// app.get("/dhaka", (req, res) => {
//     res.send(`My Location is ${LOCATION}`);
// });

// app.get("/cumilla", (req, res) => {
//     res.send(`My Location is ${LOCATION}`);
// });

app.listen(PORT, () => {
    console.log(`My Port is ${PORT}`);
});
