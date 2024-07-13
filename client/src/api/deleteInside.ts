import { sFlash } from "./getData";

export async function deleteInside(FlashId: string, index: number): Promise<sFlash> {
    const response = await fetch(`http://localhost:5000/Flash/${FlashId}/Cards/${index}`,{
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error('Failed to delete card');
    }
    return response.json();
}