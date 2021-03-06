import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';


import coursesRouter from "./routes/courses.js"
import qAndAsRouter from "./routes/qandas.js"
import cartRouter from "./routes/carts.js"
import cartItemRouter from "./routes/cartItem.js"
import usersRouter from "./routes/users.js"

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use('/courses', coursesRouter);
app.use("/qandas", qAndAsRouter)
app.use("/carts", cartRouter)
app.use("/cartitems", cartItemRouter)
app.use("/users", usersRouter)

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
  res.send(process.env.DATABASE_URL)
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
