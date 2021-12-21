import './nav.css'
import cross from'../../assets/cross.png'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Nav() {

  const history = useHistory();
  
function currentPage(){

  history.go(-1); return false

}

  return (
    <div>
    <img id="cross" src={ cross } alt="menykryss" role="button" onClick={currentPage}/>
    <nav>
      <Link className="text-link" to="/menu">Menu</Link>
      <hr></hr>
      <Link className="text-link" to="/about">Our Coffee</Link>
      <hr></hr>
      <Link className="text-link" to="/profile">My Profile</Link>
      <hr></hr>
      <Link className="text-link" to="/orderstatus">Orderstatus</Link>
    </nav>
    </div>
  )
}

export default Nav

