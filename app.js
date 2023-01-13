const express = require("express");

// Constants
const appPort = 3000;
const webPort = 4000;

// App
const app = express();
app.get("/", (req, res) => {
    const host = req.get('host').split(":");
    const port = host[host.length - 1];

    res.send(`You are accessing port are = ${port}`);
});

app.get("/about", (req, res) => {
    res.send("This is about passge");
});

app.listen(appPort, () => {
    console.log(`Example app listening at http://localhost:${appPort} app port`);
});

app.listen(webPort, () => {
    console.log(`Example app listening at http://localhost:${webPort} web port`);
});
