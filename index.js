import  Express  from "express";
import morgan from "morgan";
import "dotenv/config" //variable de entorno
import "./database/connectDB.js"; // base de datos

//rutas express
import authRouter from "./routers/auth.route.js"
const app = Express();


//middleware
app.use(Express.json())
app.use(morgan("dev"))

//routes
app.get("/", (req,res)=>{
    res.send("<h1>Documentation Api-Rest V1</h1>");
})

app.use("/api/v1",authRouter);

//server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("server ON")
});
