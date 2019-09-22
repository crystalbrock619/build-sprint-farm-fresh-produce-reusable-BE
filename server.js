const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRoutes = require('./auth/auth-router.js')
const consumerRoutes = require('./routes/consumer_routes/consumer_router.js')
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome'})
})

server.use('/api/consumers', consumerRoutes)
server.use('/api/auth', authRoutes)

module.exports = server