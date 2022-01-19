import './History.css'

import { UserContext } from '../App.js'

import { useState, useEffect, useContext } from 'react'


function History() {
  const [posts, setPosts] = useState([])
let [totlaAmount, setTotalAmount] = useState(0)
  const username = useContext(UserContext)


  useEffect(() => {
    async function getState() {
      const response = await fetch('http://localhost:8000/api/order/' + username)
       //const response = await fetch('http://localhost:8000/api/order/guYHX-mhBTPWAVuk2DgM2')
      const data = await response.json()
      let total = 0
      for (let i = 0; i < data.length; i++) {
                    total = total + data[i].price
                    setTotalAmount(total)
                }
     
      
  setPosts(data)
     

      }
  getState()
}, [username])


  

  return (
      <ul className="order-wrap">
        {
        posts.map(post => {
          return (
            
            <div>
    <li className="history-list" key={post.id}>#{post.id}</li>
    <li className="history-list">{post.orderTime}</li>
              <li className="history-list">total ordersumma { totlaAmount}{post.price} kr</li>
    <hr></hr>
    </div>)}
    )}
      </ul>
  )}

export default History