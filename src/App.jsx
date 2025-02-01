import { useState } from 'react';

function Info({message}) {
	return <h3>{message}</h3>;
}

function Button({handleOnClick, name}){
	return <button onClick={handleOnClick}>{name}</button>;
}

function App() {

  const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 100) + 1);

  function handleNewGame() {
		setSecretNumber(Math.trunc(Math.random() * 100) + 1); 
	}
   
  return  (
    <>
      <Info message={secretNumber + ' is the secret number'} />
      <Button handleOnClick={handleNewGame} name='New Game'/>
    </>  
  );
}

export default App;
