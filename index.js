import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));

// Templating engine
app.set('view engine',ejs);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});