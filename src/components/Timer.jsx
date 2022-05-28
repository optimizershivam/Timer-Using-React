import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    // console.log('time:', time)
    const [endTime, setEndTime] = useState(0);
    // console.log('endTime:', endTime)

    useEffect(() => {
        const id = setInterval(() => {
            if (endTime <= time) {
                clearInterval(id)
            }
            else {
                setTime((time) => time + 1)
            }
        },1000);

        return () => {
            clearInterval(id);
        }
    },[time,endTime])
  return (
      <div>
          Initial Time : <input onChange={(e) => setTime(+e.target.value)} /> <br />
          End Time : <input onChange={(e) => setEndTime(+e.target.value)}/> <br />
          <h1>Timer : {time}</h1>
    </div>
  )
}

export default Timer