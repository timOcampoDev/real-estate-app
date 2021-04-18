"use strict"
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/' , (req, res)=> res.send('API WORKS'));

/**
 * Define Routes
 */

app.use('/api/realtor', require( './routes/api/realtor'));

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})