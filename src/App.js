import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  

  const [val, changeVal] = useState();

  useEffect(function(){
      fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res)=> res.json())
      .then((res1)=> {console.log(res1)
         changeVal(res1);
         })
         console.log(val);
  },[])


  return (
    <div className="parent">
          <h1 className='heading'>POKEDAX</h1>
          <div className='child b1'>
              {
                val?.results.map((value, index)=>(
                  <div className='b2' key={index}>
                    <p>#{index+1}</p>
                    <h5 className='h5'>{value.name}</h5>
                  </div>
                ))
               }
               {/* <div className='b2'>
                    <p>#2</p>
                    <p>Name</p>
               </div>
               <div className='b2'> 
                    <p>#3</p>
                    <p>Name</p>
               </div>
               <div className='b2'> 
                    <p>#4</p>
                    <p>Name</p>
               </div>
               <div className='b2'> 
                    <p>#4</p>
                    <p>Name</p>
               </div>
               <div className='b2'> 
                    <p>#4</p>
                    <p>Name</p>
               </div> */}
          </div>
    </div>
  );
}

export default App;
