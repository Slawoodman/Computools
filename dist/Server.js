"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path = require('path');
var router = (0, express_1["default"])();
var port = 5000;
var __dirname = path.resolve();
router.listen(port, function () { return console.log("Running on port ".concat(port)); });
module.exports = router;
router.use((0, morgan_1["default"])(':method :url :status :res[content-length] - :response-time ms'));
router.get('/home', function (request, response, next) {
    response.sendFile(__dirname + '/Source/views/index1.html');
});
router.get('/', function (request, response) {
    response.redirect('/home');
});
router.get('/registration', function (request, response) {
    response.sendFile(__dirname + '/Source/views/regist.html');
});
router.use(function (request, response) {
    response
        .status(404)
        .sendFile(__dirname + '/Source/views/error.html');
});
