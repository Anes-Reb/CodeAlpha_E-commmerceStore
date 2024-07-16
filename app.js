require("./source/DataBase/DataBase/mongoose");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;


// Routes
const carsRoutes = require("./src/routes/main/cars");
const appointmentsRoutes = require("./src/routes/main/appointments");
const mainRoutes = require("./src/routes/main/home");