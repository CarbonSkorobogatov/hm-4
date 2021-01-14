import React from 'react';
import useLocalStorage from './useLocalStorage';


function LocalStorage(props){


  const [name, setName] = useLocalStorage('name', 'Svitoslav');

  return (
    <div>
    <hr/>
        <h1>useLocalStorage</h1>
        <label>Write your name: </label>
        <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={event => setName(event.target.value)}
        />
      <hr/>
    </div>
  );
}

export default LocalStorage; 