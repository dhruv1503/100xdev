const express = require("express");
const users = require("./src/data/users")

const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/users", (request, response) => {
    return response.status(200).json({users, message : "User list found successfully."})
})

app.get("/user/:userId/organ/:organname", (request, response) => {
    const {userId, organname} = request.params;
    if(!userId){
       return response.status(411).json({message : "User id is required."})
    }
    if(!organname){
        return response.status(411).json({message : "Organ name is required."})
    }
    const data = users.find((user) => (parseInt(user.id) === parseInt(userId)));
    if(!data){
        return response.status(404).json({message : "User does not exist"})
    }
    const relevantOrgan = data.organs.find((organ) => (organ.name === organname));
    if(!data){
        return response.status(404).json({message : "User organ not found."})
    }
    let healthyOrgans = 0;
    for(const organ of relevantOrgan.healthInfo){
        if(organ["damage"] * 100 <= 30){
            healthyOrgans += 1;
        }
    }
    // console.log(healthyOrgans)
    return response.status(200).json({data : {...relevantOrgan, healthOrganCount : healthyOrgans}, message : "Organ details found successfully"})
});

// app.post("/user/:userId/organs", (request, response) => {
//     const {organname, organcount} = request.body;
// })

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log(`Server running on ${PORT} successfully...`);
    }
})

