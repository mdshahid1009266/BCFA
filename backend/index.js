import express from "express";
const app = express();
app.use(express.json())

import cors from "cors"
app.use(cors(
    {
        origin: "https://clientbcfa.vercel.app",
        origin: true,
        credentials: true,
    }
));



import connection from "./database/connection.js"
connection();

app.get("/", (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

import adminRouter from "./routers/adminrouter.js"
app.use(adminRouter);

import userRouter from "./routers/customerRouter.js"
app.use(userRouter);

// import cma from "./controllers/adminController.js"
// cma()

// import cn from "./controllers/customerController.js"
// cn()

app.listen(2000, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log("Backend is running on port 2000");
  }
});
