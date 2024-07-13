import { sFlash } from "./getData";

export async function getCardsInside(FlashId: string):Promise<sFlash[]> {
    const response = await fetch(`http://localhost:5000/Flash/${FlashId}`);
    return response.json();
    }