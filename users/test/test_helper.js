const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users');
mongoose.connection.once('open', () => console.log('Good to go!'))
.on('error', (err) => console.log('Failed to connect', err)) 