require('dotenv').config()
const express = require('express');
const session = require('express-session')
const massive = require('massive');
const controller = require('./controller');

const app = express()
app.use(express.static(__dirname + '/../build'))
app.use(express.json());

let { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/auth/register', async (req, res)=> {
    let { username, password } = req.body;
    const db = req.app.get('db');
     let user = await db.find_user([username]);
     if (user[0]) {
         return res.status(200).send({
             loggedIn: false, message: 'username already in use'
         })
     } else {
         let createdUser = await db.create_user([username, password]);
         req.session.user = { username: createdUser[0].username, id: createdUser[0].id }
         res.status(200).send({ loggedIn: true, message: 'Register successful', username: user[0].username, id: user[0].id})
     }
 })

 app.post('/auth/login', async (req, res) => {
     let {username, password } = req.body;
     const db = req.app.get('db')
     let user = await db.find_user([username]);
     if (!user[0]) {
         return res.status(200).send({ loggedIn: false, message: 'Username not found'})
     }
     if(password === user[0].hash_value) {
         req.session.user = {username: user[0].username, id: user[0].id}
         return res.status(200).send({loggedIn: true, message: 'login successful', username: user[0].username, id: user[0].id})
     } else {
         return res.status(401).send({loggedIn: false, message: 'Incorrect password'})
     }
 })


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    
    app.listen(SERVER_PORT, () => {
        console.log(`Good vibes on port: ${SERVER_PORT}`)
    })
})
