import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const tick = () =>{
        settime(new Date())
    }
    const [time,settime] = useState(new Date());
    useEffect (()=>{
      const timeE = setInterval(()=>tick(),1000);
      return () =>{
          clearInterval(timeE)
      }
    },[time])
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timefun;