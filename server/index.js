const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
//const mc = require('./controllers/messages-controller')
const mc = require('/Users/andypuertas/Desktop/webdev/devmountain/wpr37/node/wpr37-node1-afternoon/server/controllers/messages_controller.js')

app.use(express.static(__dirname + '/../public/build'))



app.use(bodyParser.json() );

// We can pass in a req.params and/or req.body when using post or put

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

// We can only pass a req.params up to the server when using get or delete.


app.listen( port, () => {
    console.log('Server listening on port: ' + port)
})