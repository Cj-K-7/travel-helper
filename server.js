const express = require('express');
const axios = require("axios").default;
const app = express();
const PORT = 3030;

app.listen(PORT, ()=> { console.log(`listening on http://localhost:${PORT}`)})

app.get('/hotels', (req, res)=>{

})