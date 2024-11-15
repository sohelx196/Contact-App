import React, { useState } from "react";

function TasbihOrJaap() {
  const [initialVal, setnewJaap] = useState(0);
  const jaapVal = () => {
    setnewJaap(initialVal + 1);
  };

  const missedJaap = () => {
      setnewJaap(initialVal - 1);
  }
  
  return (
    <div className="">

      <div className="m-5"> 
        <h3 className="text-white text-3xl font-extralight">Do Jaap !!</h3>
      </div>

<div className="my-11">
  
      <div className="m-5">
        <button onClick={jaapVal} className="text-white border p-3 rounded-xl hover:bg-slate-600">
          Click Here
        </button>
      </div>

      <div className="m-5">
        <button onClick={missedJaap} className="text-white border p-3 rounded-xl hover:bg-slate-600">
         Missed Jaap ? 
        </button>
      </div>

      <div className="m-9 text-center">
        <p className="text-white text-center">You have Prayed {initialVal} times</p>
        <h1 className="text-slate-200 text-5xl ">{initialVal}</h1>
      </div>  
</div>

    </div>
  );
}

export default TasbihOrJaap;
