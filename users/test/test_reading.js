const assert = require('assert');
const users  = require('../src/users/user');

describe('Reading users out of the database ', () => {
    let joe;
    const query = { name:'peter' }

    beforeEach((done) => {
        joe = new users(query);
        joe.save().then(() => {done()});
    });

    it('should find all the users with a give name', (done) => {
        users.find(query).then(users => {
            // assert.equal(users[0]._id.toString, joe._id.toString())
            console.log(users);
            console.log(joe);
            assert(users[0]._id.toString === joe._id.toString())
            done()
        })
    });
});