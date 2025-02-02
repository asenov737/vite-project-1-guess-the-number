import { useState } from 'react';

function Info({message}) {
	return <h3>{message}</h3>;
}

function Button({handleOnClick, name}){
	return <button onClick={handleOnClick}>{name}</button>;
}

function Input({inpVal, handleOnChange}){
	return <input type="number" value={inpVal} onChange={handleOnChange} />; 
}

function App() {

  const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 10) );
  const [guess, setGuess] = useState('');

  function handleChange(e){
		setGuess(e.target.value); 
	}

  function handleNewGame() {
		setSecretNumber(Math.trunc(Math.random() * 10) );
		setGuess('');  
	}

  return  (
    <>
      <Info message={guess === '' ? 'Guess the number' : secretNumber === Number(guess) ? 'Yes-' + secretNumber : 'No-' + secretNumber} />
      <Input inpVal={guess} handleOnChange={handleChange}/>
      <Button handleOnClick={handleNewGame} name='New Game'/>
    </>  
  );
}

export default App;



