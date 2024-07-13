import { Request, Response } from 'express';
import Flashcard from '../models/Flashcard';

export async function getOneCard(req:Request, res:Response){
        const {FlashId}= req.params;
        const cards = await Flashcard.findById(FlashId);
        res.json(cards);
}