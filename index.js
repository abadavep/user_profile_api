const express = require('express')
const app  = express()

const { PORT } = require('./config/app')
const apiRouter = require('./routes/api')



app.use('api', apiRouter)


app.listen(PORT, ()=>{
    console.log(`Application started at port ${PORT}`);
})