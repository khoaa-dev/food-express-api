import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

import provinceRoutes from './routes/provinces.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/province', provinceRoutes);

app.get('/', (req, res) => {
    res.send('Homepage');
});



app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));