import express from 'express';
import bodyParser from 'body-parser';

import contactsRoutes from './routes/contacts.js'

const app = express();
const port = 5000;

app.use(express.json());

app.use(bodyParser.json());

app.use('/contacts', contactsRoutes);

app.get('/', (req,res) => res.send('Hello World from Homepage!'));

app.listen(port, () => console.log(`Server is running on port ${port}`));
