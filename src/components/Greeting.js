// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  // let greeting = 'Welcome the following students to class!';

  const [greeting, setGreeting] = useState('Welcome the following students to class!')

  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group, setGroup] = useState(['Alex', 'Jessica', 'Alishah', 'Slavic' ]);

  const [name, setName] = useState('')

  function handleClick() {
    setGreeting('Happy holidays to everyone!');
  }

  function handleSort() {
      const groupSorted = [...group];
      groupSorted.sort();
      setGroup(groupSorted);
  }

  function nameUpdate(e) {
    setName(e.target.value)
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}, {name}</p>
        {name}
        <ul>
          { group.map(person => 
            <li>{person}</li>
          )}
        </ul>
        <label>Enter your name: </label><input type='text' onChange={e => nameUpdate(e)} />
        <button onClick={handleClick}>Change greeting!</button>
        <button onClick={handleSort}>Sort</button>

      </div>
    </div>
  );
}

export default Greeting;
