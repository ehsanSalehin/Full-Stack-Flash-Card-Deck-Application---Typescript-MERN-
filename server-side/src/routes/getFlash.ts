import { Request, Response } from 'express';
import Flashcard from '../models/Flashcard';

export async function getFlash(req:Request, res:Response){
        /*fetch data from mongo     */
        const flashC= await Flashcard.find();
        /* send it back to user*/
        res.json(flashC)
}