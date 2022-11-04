const express = require("express");
const cors = require("cors");
const { studentRouter } = require('./modules/students/student.routes');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Helo World!')
});

app.use('/students', studentRouter);

app.listen(3333, () => {
    console.log('API is running on port 3333');
});