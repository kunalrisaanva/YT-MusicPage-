import express from "express";
import path from "path"

const PORT = 2000

const app = express()


app.use(express.static("public"));


app.get("/",(req,res) => {
    res.sendFile(path.join(__filename,"./index.html"));

})



app.listen(2000,() => console.log(`server is running on port ${PORT}`))