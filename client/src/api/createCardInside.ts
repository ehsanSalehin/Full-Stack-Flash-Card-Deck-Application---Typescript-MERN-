import { sFlash } from "./getData";

export async function createCardInside(FlashId:string ,content: string):Promise<sFlash[]> {
    const res = await fetch(`http://localhost:5000/Flash/${FlashId}/Cards`,{
        method:"POST",
        body: JSON.stringify({
          content,
        }),
        headers:{
          "Content-Type": 'application/json',
        }
       
      });
      return res.json();
    }