'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose  = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors())
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const emailRoutes = require("./routes/emails")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));

const DB = require('./config/DatabaseConnectionString').mongoURI;
//Connect to DB
mongoose
      .connect(DB,{ useNewUrlParser: true })
      .then(()=>console.log('DB connected.'))
      .catch(err=>console.log(err));


/**
 * initialize routes here
 * anything beginning with "/api" will go into this
 */
app.use("/users", userRoutes);
app.use("/events", eventRoutes);
app.use("/emails", emailRoutes);


app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });


module.exports= app;