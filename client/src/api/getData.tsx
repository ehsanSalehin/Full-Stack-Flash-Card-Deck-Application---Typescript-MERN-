export type sFlash = {
    title: string;
    _id : string;
    cards: string[];
  };

export async function getData():Promise<sFlash[]> {
    const response = await fetch("http://localhost:5000/Flash");
    return response.json();
    }