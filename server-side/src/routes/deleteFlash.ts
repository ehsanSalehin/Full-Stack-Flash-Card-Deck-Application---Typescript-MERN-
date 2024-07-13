import { Request, Response } from 'express';
import Flashcard from '../models/Flashcard';


export async function deleteFlash(req:Request, res:Response){   
 /* get card id from the url*/
const getCard = req.params.FlashId;
/*delete card from mongo*/
const deleteF = await Flashcard.findByIdAndDelete(getCard);
/* return card */
res.json(deleteF)
}