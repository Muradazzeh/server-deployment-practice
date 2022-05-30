`use strict`
const express = require('express')
const app = express();
const stamper = require("../Middleware/middleware")
const handleNotFound = require("../ErrorFolder/404Error")
const errorHandler = require("../ErrorFolder/500Error")
// let port = 3000;

app.get("/", (req, res) => {
    res.status(200).send('HELLO FROM THE OTHER SIDE');
});


app.get("/data", (req, res) => {
    res.json(
        {
            id: 20090024026,
            name: "Murad alazzeh",
            email: "morad.azza@yahoo.com",
            major: "Electrical enginnering"
        })
})

app.get("/test", stamper, (req, res) => {
    res.json({
        id: 200140024026,
        name: "testing using middle ware function",
        details: "now we will try to use middle ware function in this route ",
        time: req.timeStamp

    })
})
app.get("/badGate", (req, res) => {
    num = 5;
    num = num + 6
    res.status(500).send(result);
})

app.use("*", handleNotFound);
app.use(errorHandler);








function start(port) {
    app.listen(port, () => {
        console.log(`server running at port : ${port}`)
    })
}
module.exports = {
    app: app,
    start: start,
}