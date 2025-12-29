import express from "express"

const app = express();

const PORT = 8000

app.listen(()=>{
    console.log(`Backend is connected to ${PORT}`);
    
})