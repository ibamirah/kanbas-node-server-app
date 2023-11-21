import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js"
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

// const express = require('express')
const app = express()
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Hello(app)
Lab5(app)
app.use(cors());
app.listen(process.env.PORT || 4000);