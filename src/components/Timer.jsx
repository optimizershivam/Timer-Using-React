import React, { useState } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(null);
  const [check, setcheck] = useState(true);
  const [watch, setwatch] = useState(300);

  const start = () => {
    setcheck(!check)

    let id = setInterval(() => {
      if (watch <= 0) {
        clearInterval(id)
        
      }
      else {
        setwatch((e) => e - 1);
        setTimer(id)
      }
    }, 1000);
  }

  const stop = () => {
    setcheck(!check)
    clearInterval(timer)
    setTimer(null)
  }

  const reset = () => {
    clearInterval(timer)
    setwatch(0)
  }

  let handleInput = (e) => {
    setwatch(e.target.value);
  }

  function msToTime(duration) {
        var seconds = parseInt((duration) % 60)
            , minutes = parseInt((duration % 3600) /60)
            , hours = parseInt(duration/3600);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        if (hours == 0 && minutes == 0) {
            return seconds + "s" + " " 
        }
        else if (hours == 0 && minutes > 0){
            return minutes + "m" + " " + seconds + "s"
        }
        else if (hours > 0) {
            return hours + "h" + " " + minutes + "m" + " " + seconds + "s"
        }
    }
  return (
    <div>
      <h2>Timer</h2>
      <input onChange={handleInput} placeholder="Enter time in seconds"/>
      <h1>{msToTime(watch)}</h1>
      <button onClick={check ? start : stop}>{check ? "Start" : "Stop"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer