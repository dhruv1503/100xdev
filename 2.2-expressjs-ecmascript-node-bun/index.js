const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const port = 3000;


app.use(bodyParser.json())

app.get("/", (request, response) => {
response.send("Hello People")

})

app.listen(port, (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log(`Server running at Port ${port}...`)
    }
})
