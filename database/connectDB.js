import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Connect MongoDB")
} catch (error) {
    console.log("error a conexion a MongoDB")
}

