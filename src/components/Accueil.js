import * as React from 'react';
import {Link} from 'react-router-dom';
import tableHome from '../assets/image/01.png';
import objectHome from '../assets/image/Objects.svg';
import thinkhome from '../assets/image/thinkacc.svg';


  function Accueil() {



return (
  <>
 <div>
    <div className='button-container'>
  <h1 className="TitleGame">Design Clash</h1>


  <Link to="/GamePage">
  <button className='buttonStart'as="a" variant="success" color="success">START</button>
  </Link>

  <Link to="/Classment">
  <button variant="primary" color="success" className='buttonClass'>Classement</button>
  </Link>

  <Link to="/Rules">
  <button variant="contained" color="success" className='buttonRules'>Game Rules</button>
  </Link>
</div>
  <img className='tableHome' alt='tableHome' src={tableHome}></img>
  <img className='objectHome' alt='objectHome' src={objectHome}></img>
  <img className='thinkHome' alt='thinkHome' src={thinkhome}></img>
</div>
</>
);

}

export default Accueil;
