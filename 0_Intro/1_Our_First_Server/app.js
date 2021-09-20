const app = require("express")();

app.get("/", (req, res) => {
    res.send({ mindIsBlown: true });
});

app.listen(8080);