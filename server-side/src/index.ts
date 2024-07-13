import {config} from 'dotenv';
config();

import cors from 'cors'; 
import express from 'express';
import mongoose from 'mongoose';
import { getFlash } from './routes/getFlash';
import { createFlash } from './routes/createFlash';
import { deleteFlash } from './routes/deleteFlash';
import { createFlashForC } from './routes/createFlashForC';
import { getOneCard } from './routes/getOneCard';
import { deleteInsideCard } from './routes/deleteInsideCard';

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors(
   { origin: "*",}
));
app.get('/Flash', getFlash);
app.post('/Flash', createFlash);
app.delete('/Flash/:FlashId', deleteFlash);
app.post('/Flash/:FlashId/Cards', createFlashForC); 
//while we are inside the cards ==> get data:
app.get('/Flash/:FlashId', getOneCard);
app.delete('/Flash/:FlashId/Cards/:index', deleteInsideCard);

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listening on ${PORT}`);
    app.listen(PORT);
});

