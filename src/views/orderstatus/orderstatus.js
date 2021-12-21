import './orderstatus.css'
import drone from'../../assets/drone.png'

import { useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'

function Orderstatus() {

    const history = useHistory()
    const orderStatus = useSelector((state) => { return state.orderStatus})

function handleOk() {
  history.push("/profile")
}

  return (
    <div id="orderstatus">
    <p id="order-number">Ordernummer #{orderStatus.id}</p>
    <img src={drone} alt="Drönare med kaffemugg"/>
    <h2 id="title-orderstatus">Your Order is on the Way!</h2>
    <p id="eta">{orderStatus.eta} minutes</p>
    <button id="ok" type="button" onClick={ handleOk }>Ok, cool!</button>
    </div>
  )
}


export default Orderstatus