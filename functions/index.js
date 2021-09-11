const functions = require("firebase-functions");
// const { capitalise } = require("./capitalise");
const { capitalise } = require("capitalise");

exports.capitaliseWords = functions.https.onRequest((req, res) => {
    const text = capitalise(req.body.text);
    res.status(200).send(text);
});
