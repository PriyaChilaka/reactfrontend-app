import add from '../assets/add.png'
import './MenuItem.css'

import actions from '../actions/orderAction'
import {  useDispatch } from 'react-redux'

function MenuItem({ task }) {

  const dispatch = useDispatch()

  var number = 0

  function countClick() {
   number++
   document.getElementById("number").innerHTML = number
   dispatch(actions.addOrder(task))
  }

  return (
    <div>
      <div id="one-row">
      <img role="button" onClick={ () => { countClick(task) }} id="add" src={add} alt="Lägg till produkt"/>
      <li className="title">{ task.title } </li>
      <li className="price">{ task.price } kr</li>
      </div>
      <li id="desc">{ task.desc }</li>
      </div>
  )
}

export default MenuItem