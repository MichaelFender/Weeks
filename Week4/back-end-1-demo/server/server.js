const express = require('express');
const app = express()
const cors = require('cors')
app.use(express.json())  // When we want to be able to accept JSON.
app.use(cors());

//^^TOP

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    if (req.query.item){
        const filteredItems = inventory.filter(invtItem => invtItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
    }else{
        res.status(200).send(inventory)
    }
});

app.get('/api/inventory/:index', (req, res) => {
    res.status(200).send(inventory[+req.params.index])
});





////BOTTOM
const SERVER_PORT = 5050
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));

//: nodemon server/server.js in terminal to start server