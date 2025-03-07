import React, { useEffect, useState } from "react";
import RandomeNumberAplhabetCharacterGenrator from "../js/RandomFunctionGenarator";

function Home() {
  const [data, setdata] = useState("");

  const [genlength, setgenlength] = useState(2);

  const clickToGenrate = (genlength) => {
    const ans = RandomeNumberAplhabetCharacterGenrator(genlength);
    console.log(ans);
    setdata(ans);
  };

  useEffect(()=>{
    clickToGenrate(2);

  },[])

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">

            
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Genrate your Random Number . Also you can custome length 
            </p>
            <section>
            <p>Data : {data}</p>
            <p>Length: {genlength}</p>

            <div>
                <input type='range' value={genlength} onChange={(e)=> setgenlength(e.target.value)}/>
            </div>
            <button className='px-10 py-2.5 bg-blue-600 rounded text-xl text-white hover:shadow-[0_0_10px_red]' onClick={()=> clickToGenrate(genlength)}>Genrate</button>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
