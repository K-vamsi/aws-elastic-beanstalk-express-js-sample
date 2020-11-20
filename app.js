const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello Vamsi from AWS!'));
=======
app.get('/', (req, res) => res.send('Hello Vamsi from AWS'));
>>>>>>> a630f7e7b3509c80950ad0d8340a45192fbad799

app.listen(port);
console.log(`App running on http://localhost:${port}`);
