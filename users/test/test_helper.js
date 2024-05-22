const { before } = require('mocha');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/users');
    mongoose.connection.once('open', () => { done(); })
    .on('error', (err) => console.log('Failed to connect', err)) ;
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});