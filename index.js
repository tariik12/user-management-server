const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const  cors = require('cors')


app.use(cors())
app.use(express.json())
const users = [
    {id:1, name:'Sabina', email:'sabina@gmail.com'},
    {id:2, name:'Amir', email:'amir@gmail.com'},
    {id:3, name:'Nill', email:'nill@gmail.com'},
    {id:4, name:'Saki', email:'saki@gmail.com'}
]
app.get('/', (req, res) =>{
    res.send('Users Management server is running')

})

app.get('/users', (req,res) =>{
    res.send(users)
})

app.post('/users',(req,res) =>{
    console.log('post api heating')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})
app.listen(port, () =>{
    console.log(`Server is running on PORT: ${port}`)
})