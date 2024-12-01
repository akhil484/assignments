import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'
import { formatTime, calculateTime } from '../utils/auxiliaryFunctions';

const box={
  width: '380px',
  height: '400px',
  borderRadius: '5px',
  backgroundColor: '#1E293B',
  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alighItems: 'center',
  flexDirection: 'column'
}
const container = {
  display: 'flex',
  height: '100vh', 
  justifyContent: 'center',
  alignItems: 'center'
}
const ring = {
  width: '280px',
  height: '280px',
  border: '8px solid #3298DB',
  borderRadius: '50%',
  boxSizing: 'border-box',
  backgroundColor: '#1E293B',
  marginLeft: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const buttons = {
  backgroundColor: '#4B5563',
  width: '125px',
  height: '38px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
  marginTop: '15px',
  cursor: 'pointer'
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [initialtime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [editState, setEditState] = useState({ field: null, value: '' });

  function decreaseTimer(){
    if(isRunning)
    {
      console.log('inside');
      setTime((currentVal)=>currentVal-1);
    }
  }

  useEffect(()=>{
    let interval = null;
    if(isRunning&&time>0){
      interval = setInterval(decreaseTimer, 1000);
    }
    else if(time===0)
    {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval); 
    };
  },[isRunning, time])

  const handleEditField = (field) => {
    
    if (editState.field === field) {
      
      const newTime = {
        ...formatTime(time),
        [field]: editState.value.padStart(2, '0') 
      };

      

      const calculatedTime = calculateTime(newTime.hours, newTime.minutes, newTime.seconds);
      console.log(calculatedTime)
      
      setTime(calculatedTime);
      setInitialTime(calculatedTime);

      
      setEditState({ field: null, value: '' });

    } else {
      
      setIsRunning(false); 
      setEditState({ field, value: formatTime(time)[field].replace(/^0+/, '') });

    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); 
    setEditState((prevState) => ({ ...prevState, value })); 
  };

  const { hours, minutes, seconds } = formatTime(time);
  return (
    <div style={container}>
      <div style={box}>
        <div style={ring}>
        {editState.field === 'hours' ? (
              <input
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('hours')}
                autoFocus
              />
            ) : (
          <span className={styles.time} onClick={() => handleEditField('hours')}>{hours}</span>
          )}
          <span className={styles.time}>:</span>
          {editState.field === 'minutes' ? (
              <input
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('minutes')}
                autoFocus
              />
            ) : (
          <span className={styles.time} onClick={() => handleEditField('minutes')}>{minutes}</span>
          )}
          <span className={styles.time}>:</span>
          {editState.field === 'seconds' ? (
              <input
                type="text"
                value={editState.value}
                onChange={handleInputChange}
                onBlur={() => handleEditField('seconds')}
                autoFocus
              />
            ) : (
          <span className={styles.time} onClick={() => handleEditField('seconds')}>{seconds}</span>
            )}
        </div>
        <div style={{display: 'flex', gap: '15px'}}>
          <div className={styles.pause} onClick={()=>setIsRunning(!isRunning)}>{isRunning?'Pause':'Start'}</div>
          <div style={buttons} onClick={()=>{setTime(0); setInitialTime(0); setIsRunning(false);}}>Reset</div>
        </div>
      </div>
    </div>
  )
}

export default Timer