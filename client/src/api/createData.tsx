export async function createData(title: string) {
    const res = await fetch('http://localhost:5000/Flash',{
        method:"POST",
        body: JSON.stringify({
          title,
        }),
        headers:{
          "Content-Type": 'application/json',
        }
       
      });
      return res.json();
    }