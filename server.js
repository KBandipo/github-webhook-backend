require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

const { PORT } = process.env;


app.get('/', (req, res) => {
  res.send('GitHub Webhook Server is live!');
});


/******************NOTE****************************/ 
// This is the Webhook route: GitHub sends data here
app.post('/webhook', (req, res) => {
  const event = req.headers['x-github-event'];
  const payload = req.body;

  console.log(`Webhook received: ${event}`);
  console.log('Payload:', JSON.stringify(payload, null, 2));

/******************NOTE****************************/  
  //This Send event + payload to the connected clients
  io.emit('github_event', { event, payload });

  res.status(200).send('Webhook received');
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
