const { PrismaClient } = require('../prisma/generated/prisma');
const prisma = new PrismaClient();

console.log('Starting server...');

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Something went wrong ${err}`);
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
