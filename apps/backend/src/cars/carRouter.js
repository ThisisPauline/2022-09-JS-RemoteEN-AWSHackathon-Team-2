const express = require("express");
const carRouter = express.Router();
const carHandlers = require("./carHandlers");

carRouter.get("/", carHandlers.getAllCars);

module.exports = carRouter;
