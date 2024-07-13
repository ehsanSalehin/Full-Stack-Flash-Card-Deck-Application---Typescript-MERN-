export async function deleteData(FlashId: string, index: number) {
    await fetch(`http://localhost:5000/Flash/${FlashId}/Cards/${index}`,{
        method: "DELETE",
    });
}