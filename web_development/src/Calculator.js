import React, { useState } from 'react'

function Calculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () =>{
        const today = new Date();
        const birthDate = new Date(dob);
        const diff = today - birthDate;
        const ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        setAge(ageInYears);

    }

  return (
    <div className='Calculator'>
        <h1>Age Calculator</h1>
        <label>Date of Birth:</label>
        <input 
            type='date'
            id='dob'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
        />
        <button onClick={calculateAge}>Calculator</button>
        {age !== null && <p>Your age is: {age}</p>}

    </div>
  )
};

export default Calculator;