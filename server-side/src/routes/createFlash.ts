import { Request, Response } from 'express';
import Flashcard from '../models/Flashcard';

export async function createFlash(req: Request, res: Response){
    const newFlash = new Flashcard({
        title: req.body.title,
    });
    const done = await newFlash.save();
    res.json(done);
}