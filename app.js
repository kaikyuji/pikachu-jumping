const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.use('/public', express.static('public'))

