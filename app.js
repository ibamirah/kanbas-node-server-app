import express from 'express';
import session from "express-session";
import Hello from "./hello.js"
import Lab5 from "./lab5.js"
import cors from "cors";
import mongoose from "mongoose";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import UserRoutes from "./users/routes.js";

// const express = require('express')
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://amirahib:Jannha66@cluster0.vitc6bz.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors({
      credentials: true,
      origin: 
        process.env.NODE_ENV === "production"
          ? process.env.FRONTEND_URL_LOCAL
          : process.env.FRONTEND_URL,
    })
  );

  const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));

  
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
app.use(express.json()); // this has to go first
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000);