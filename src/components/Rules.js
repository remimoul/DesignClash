import ques from '../assets/image/ques.png';
import sablerank from '../assets/image/sablerank.png';
import inconnuRank from '../assets/image/inconnu.svg';
import { useNavigate } from 'react-router-dom';
import objects from '../assets/image/Objects.svg';

function Rules(){
  const navigate = useNavigate();
    return (
        
      <div className='rules-border'>
<img className='objectsRulesIMG' src={objects} alt='objects'></img>
<button className='buttonExit' onClick={()=>navigate('/')}>Back</button>
            <div className='container-logo-rules'>
      <img className='logo-ques1' src={ques} alt='star'></img>
        <h1 className='addPlayerTitle'>Design Clash</h1>
      </div>


          <div style={{color: 'black', fontSize: 32, fontFamily: 'Koulen', fontWeight: '400', textAlign: 'center'}}>the rules</div>
      <div className='rulesText'>
      <h2>SET UP : </h2>
      <ul>
        <li>Open the app and enter the names of the players.</li>
        <li>Put the totem at an equal distance from all the players.</li>
        <li>Take out the different levels of question cards and set them aside.</li>
      </ul>
      <h2>HOW THE GAME STARTS : </h2>
      <p>
      The first player to draw a card is the youngest one playing, reads out the question, and suggests answers. The other players must grab as quickly as possible the totem to have the chance to answer the question. If he’s wrong another player can grab the totem and try to answer. If he is right he enters his point on the app, if he doesn’t get it right nobody gets the point and we set the card aside. 
      </p>
      <h2>HOW TO PROGRESS IN THE GAME :</h2>
      <p>As players reach a certain number of points, the difficulty level increases.
The questions become more complex, and more answers are proposed, requiring more thought and in-depth knowledge.
For each correct answer you win 4 points in the easy level, 5 points in the medium level and 10 points in the difficult one</p>
      <ul>
        <li>Easy level : Until 20 pts</li>
        <li>Medium level : Until 50 pts</li>
        <li>Hard level : Until 100 pts</li>
      </ul>

      <h2>HOW TO WIN THE GAME :</h2>
      <p>The first player to reach 100 points wins the game.</p>

      <h2>SPECIAL CARDS : </h2>
      <p>There are cards that can give you bonuses or penalties.</p>
      <ul> 
        <li>Bonus Card: The card doubles the points of the players.</li>
        <li>Penalty Card: If a player gets this card he loses 2 points.</li>
        <li>Exchange Card: If a player gets this card he has the opportunity to exchange his points with another player’s points</li>
        
        </ul> 


      </div>
       
          <img className='tableRulesIMG' src={sablerank} alt='tableRank'></img>
        <img className='inconnuRankIMG' src={inconnuRank} alt='inconnuRank'></img>
        <button className='RulesExit' onClick={() => {navigate('/');}}>Exit</button>
        </div>
    
    )
} export default Rules;