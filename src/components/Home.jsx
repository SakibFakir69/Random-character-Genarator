


import React, { useState } from 'react'
import RandomeNumberAplhabetCharacterGenrator from '../js/RandomFunctionGenarator'


function Home() {

    const [ data , setdata ] = useState("");

    const clickToGenrate = ()=>{

        const ans = RandomeNumberAplhabetCharacterGenrator(10);
        console.log(ans);
        setdata(ans);


    }





  return (
    <div>

        <section>
            <p>Data : {data}</p>
            <button className='btn' onClick={()=> clickToGenrate()}>Genrate</button>
        </section>



    </div>
  )
}

export default Home