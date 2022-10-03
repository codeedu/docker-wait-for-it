"use strict";

var createApp = require("./index");

var PORT = 3000;
var app = createApp();
app.listen(PORT, function () {
  console.log("Running on port ".concat(PORT));
});