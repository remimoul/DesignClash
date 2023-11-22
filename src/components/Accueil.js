import * as React from 'react';
import {Link} from 'react-router-dom';


  function Accueil() {



return (
  <>
  <h1 className="TitleGame">Design Clash</h1>

  <div className='button-container'>
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

  <div className='tableHome' alt='stop'></div>
  <div className='thinkHome' alt='stop'></div>
  <div className='objectHome' alt='stop'></div>

</>
);

}

export default Accueil;
