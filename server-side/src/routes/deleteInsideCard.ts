import { Request, Response } from 'express';
import Flashcard from '../models/Flashcard';


export async function deleteInsideCard(req:Request, res:Response){   
    const FlashId = req.params.FlashId;
    const index = parseInt(req.params.index, 10);
    const flash = await Flashcard.findById(FlashId);
    if (!flash) return res.status(400).send("Empty")
    flash.cards.splice(index, 1);
    await flash.save();
    res.json(flash);
}