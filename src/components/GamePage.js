import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../assets/image/star.svg';
import check from '../assets/image/check.svg';
import letterx from '../assets/image/letter.svg';
import ques from '../assets/image/ques.png';
import { MdDelete } from "react-icons/md";
import { Toaster, toast } from 'sonner'
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import yaySound from '../assets/sound/clap.mp3';


function GamePage() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [highestScoringPlayer, setHighestScoringPlayer] = useState(null);
  const [message, setMessage] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const [play] = useSound(yaySound);

  const endGame = () => {
    setGameStarted(false);
    const highestPlayer = players.reduce((highest, player) => {
      return (highest.score > player.score) ? highest : player;
    });
    setHighestScoringPlayer(highestPlayer);
    
  };

  if (!gameStarted && highestScoringPlayer) {
    
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    return (
      <div>
        {/* <p className='Player'>The player with the highest score is {highestScoringPlayer.name} with a score of {highestScoringPlayer.score}</p> */}
        <h2>Player Rankings</h2>
      
        {sortedPlayers.map((player, index) => (
          <div className='PlayerRank' key={index}> 
          {player.name} 
          <span className='rank'>{index + 1}</span>
      
            {player.score}</div>
        ))}
      
      <button onClick={() => {setHighestScoringPlayer(null); navigate('/');}}>Play again</button>
    
      </div>
    );
  }
  
  

  const increment = (index) => {
    
    // setPlayers(players.map((player, idx) => idx === index ? { ...player, score: player.score + 10 } : player));
    setPlayers(players.map((player, idx) => {
      if (idx === index) {
        const newScore = player.score + 10;
        if (newScore >= 100) {
          setMessage(toast(`Player ${player.name} has reached 100 points!`));
          setShowConfetti(true);
          play();
          setTimeout(() => setShowConfetti(false), 2500); // Disparaît après 2 secondes
        }
        return { ...player, score: newScore };
      }
      return player;
    }));
  };

  const decrement = (index) => {
    setPlayers(players.map((player, idx) => idx === index ? { ...player, score: player.score - 10 } : player));
  };

  const addPlayer = () => {
    if (newPlayer !== '' && players.length < 6) {
      setPlayers([...players, {name :newPlayer,score : 0}]);
      setNewPlayer('');
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  if (gameStarted) {
    return (
      <div>
        {showConfetti && <Confetti />}
        <div className='container-logo'>
        <img className='logo-ques' src={ques} alt='star'></img>
        <h1 className='addPlayTitle'>Design Clash</h1>
        </div>
        {players.map((player, index) => (
          <div className='Player' key={index}>
            <div className='namePlayerInput'>{player.name}</div>
          <p className='scorePlayer'>Score: {player.score} <img className='star' src={star} alt='star'></img> </p>
          <div className='container-button-score'>
          <button className='scorePlus' onClick={()=> increment(index)}><img src={check} alt='check'></img></button>
          <button className='scoreMoins' onClick={()=> decrement(index)}><img src={letterx} alt='x'></img></button>
          </div>
          </div>
        ))}
      {message && <Toaster richColors closeButton position="top-center" />}
        <button onClick={endGame}>End game</button>
      </div>
    );
  }

  const removePlayer = (indexToRemove) => {
    setPlayers(players.filter((_, index) => index !== indexToRemove));
  };

  console.log(players);
  return (
    <div>
      <div className='container-logo'>
      <img className='logo-ques1' src={ques} alt='star'></img>
        <h1 className='addPlayerTitle'>Design Clash</h1>
      </div>
      
      <span className='titleAdd'>Add players</span>
      <input className='addPlayer' type="text" placeholder="Player name" value={newPlayer} onChange={(e) => setNewPlayer(e.target.value)} />
      {players.length === 0 ? <button className='plusPlayer' onClick={addPlayer}>+</button> : null}
       
      <ul className='containerPlayer'>
        {players.map((player, index) => (
          <li key={index}>
            <input className='addOnePlayer' type="text" placeholder='eeee' value={player.name}  />
            {index === players.length - 1 && <button className='plusPlayerLI' onClick={addPlayer}>+</button>}
            {index === players.length - 1 && <button className='startGame' onClick={startGame} disabled={players.length === 0}>Start</button> }
            <MdDelete style={{width:"10%",height:"0%",marginBottom:"-3%",color:"red"}} onClick={() => removePlayer(index)}>-</MdDelete>
          </li>
        ))}
      </ul>
     
      {/* <button className='startGame' onClick={startGame} disabled={players.length === 0}>Start</button> */}
      <div className='tableHome' alt='sable'></div>
      <div className='brains' alt='brains'></div>
      <div className='Question' alt='object'></div>
    </div>
  );
}

export default GamePage;