// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function getRandomNumber() {
  return Math.floor(Math.random() * (2 - 0) + 0);
}

function App() {
  const [count, setCount] = useState(0);
  const [choice, setChoice] = useState('');
  const [iaChoice, setIaChoice] = useState('');
  const [isPlayed, setIsPlayed] = useState(false);
  const [result, setResult] = useState('');

  // Estado para determinar la fase del juego, si seleccion o desenlace

  function getResult (){
    if (choice == 'Rock' && iaChoice == 'Scissors') {
      return 'win';
    } else if (choice == 'Paper' && iaChoice == 'Rock') {
      return 'win';
    } else if (choice == 'Scissors' && iaChoice == 'Paper') {
      return 'win';
    } else if (choice !== iaChoice) {
      return 'lose';
    }

    return 'tie';
  }


  const shapes = ['Rock', 'Paper', 'Scissors'];

// debugger;
  if (choice != '' && isPlayed) {
    setResult(getResult());

    if(result == 'win'){
      setCount(count + 1);
    }
    
    if(result == 'lose'){
      setCount(count - 1);
    }

    setIsPlayed(false);
  }

  // console.log(shapes);

  return (
    <>
      <div><h1>{count}</h1></div>
      {choice == '' ?
        <div>{shapes.map(s =>
          <button onClick={() => {setChoice(s); setIaChoice(shapes[getRandomNumber()]); setIsPlayed(true)}} key={s}>{s}</button>
        )}</div>
        :
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <span>Player selection</span>
            <span>{choice}</span>
          </div>

          {result == 'win' && <div>Player Win</div>}
          {result == 'lose' && <div>Player Lose</div>}
          {result == 'tie' && <div>Player Tie</div>}

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <span>IA selection</span>
            <span>{iaChoice}</span>
          </div>
          <button onClick={() => setChoice('')}>Jugar de nuevo</button>
        </div>
      }
    </>
  )
}

export default App
