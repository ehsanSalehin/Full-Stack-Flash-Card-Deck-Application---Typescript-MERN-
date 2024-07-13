import { useEffect, useState } from 'react';
import './App.css'
import {Link} from "react-router-dom";
import { deleteData } from './api/deleteData';
import { getData, sFlash } from './api/getData';
import { createData } from './api/createData';

function App() {

  const[title, setTitle] = useState('');
  const [flash, setFlash]= useState <sFlash[]>([]);

  /*createing flash cards*/
  async function noReaload(e:React.FormEvent){
    e.preventDefault();
    const newFlash  = await createData (title);
    setFlash([...flash,newFlash ])
    setTitle("");
  }

  /*   api request for getting data and display it   */
  useEffect (()=>{
    async function fetchFlash(){
      const savingData = await getData();
      setFlash (savingData);
    }
    fetchFlash();
  },[]);
/* deleting flash cards */
  async function handleDelete(FlashId: string){
    await deleteData(FlashId);
    setFlash(flash.filter((flash)=>flash._id !=FlashId));
  }
 

  return (
    <div  className='App'>
      <ul className='flashCards'>
          {flash.map((cardF)=>(
              <li key={cardF._id}>
                  <button  className="btn-img" onClick={()=>handleDelete(cardF._id)}><img className='img' width="50" height="50" src="https://img.icons8.com/clouds/100/delete.png" alt="delete"/></button>
                  

                  <Link to={`/Flash/${cardF._id}`}>{cardF.title}</Link>
              </li>
        ))}
      </ul>
    <form onSubmit={noReaload}>
      <label htmlFor="flash">Title : </label>
      <input id="flash"  value = {title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
      }}/>
      <button className='btn'>click</button>
    </form>
    </div>
  );
}
export default App;
