// server.js
const express = require('express');
const expressGraphql = require('express-graphql');
const app = express();

const schema = require('./sehema');
app.use('/graphql', expressGraphql({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => res.end('hello world~'));

app.listen(8000, (err) => {
    if (err) { throw new Error(err); }
    console.log('--- server started ---');
    console.log('--- at http://localhost:8000 ---');
});