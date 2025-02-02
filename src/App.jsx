import { useState } from 'react';

function Info({number}) {
	return <h3>{number}</h3>;
}

function Button({handleOnClick, name}){
	return <button onClick={handleOnClick}>{name}</button>;
}

function App() {

  const [secretNumber, setSecretNumber] = useState(Math.trunc(Math.random() * 10) );

  function handleNewGame() {
		setSecretNumber(Math.trunc(Math.random() * 10) ); 
	}
   
  return  (
    <>
      <Info number={secretNumber} />
      <Button handleOnClick={handleNewGame} name='New Game'/>
    </>  
  );
}

export default App;



