const fetchData = require('./test/api');
const nock = require('nock');

test('GET /users api data', async () => {
    // Mock the API response
    nock('http://localhost:3001')
        .get('/users')
        .reply(200, {
            getAllUsers: [
                { _id: 1, name: 'User 1' },
                { _id: 2, name: 'User 2' },
                // Add more user objects as needed for your test
            ],
        });

    const data = await fetchData();
    console.log(data);
    expect(data).toHaveProperty('getAllUsers');
    data.getAllUsers.forEach(user => {
        expect(user).toHaveProperty('_id');
    });
});
