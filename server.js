import app from "./app.js";
import { connectDB } from "./config/database.js";
const port = process.env.PORT || 8000;

connectDB();

app.get("/", (req, res)=>{
    try {
        
        res.status(200).send({message: "Hello from learnrs", PORT: process.env.PORT, usage : process.cpuUsage(), RAM : process.memoryUsage()})
    } catch (err) {
        res.status(400).send({message: "Hello from learnr-backend", PORT: process.env.PORT, usage : process.cpuUsage(), RAM : process.memoryUsage()})
        
    }
})

app.listen(port, () => {
    console.log(`🏃 Server is running on ${port}`);
})