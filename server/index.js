const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

// Static Public Folder
app.use(express.static(path.join(__dirname, "../build")));

app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(port, () => {
    console.log(`Server listen in port ${port}`);
});