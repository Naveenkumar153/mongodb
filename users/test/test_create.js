/**
 * This file is part of the create user to database test
 */

const assert = require('assert');

const users = require('../src/users/user');

describe('Creating records', () => {
  it('save a new user record', () => {
    //  assert(1+1 === 4);     
    const peter = new users({ name: 'peter' });
    peter.save().then((done) => {
       assert(peter.isNew);
       done()
    });
  });
});

