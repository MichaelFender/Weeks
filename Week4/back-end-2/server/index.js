const express = require('express');
const app = express()
const cors = require('cors')
app.use(express.json())  // When we want to be able to accept JSON.
app.use(cors());
//////^^TOP

const ctrl = require('./controller.js')

app.get(`/api/houses`, ctrl.getHouses)
app.post(`/api/houses`, ctrl.createHouse)
app.put(`/api/houses/:id`, ctrl.updateHouse)
app.delete(`/api/houses/:id`, ctrl.deleteHouse)




/////BOTTOM
const SERVER_PORT = 4004
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));

//: nodemon server/server.js in terminal to start server