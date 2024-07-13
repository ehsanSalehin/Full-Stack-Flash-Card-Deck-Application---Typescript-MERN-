import { Request, Response } from 'express';
import Flashcard from '../models/Flashcard';

export async function createFlashForC(req: Request, res: Response){
    const FlashId = req.params.FlashId;
    /*   fetch card from mongo    */
    const flash = await Flashcard.findById(FlashId);
    /* card information is on the body */
    if (!flash) return res.status(400).send("Empty")
    const {content} = req.body;
    /* push inside the cards array in mongo */
    flash.cards.push(content)
    await flash.save();
    res.json(flash);
}