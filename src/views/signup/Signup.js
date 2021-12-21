import './signup.css'
import logo from'../../assets/logo.png'

import { useState, createContext } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/header'

const UserContext = createContext(undefined)
const EmailContext = createContext(undefined)


function Signup({update, updateEmail}) {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')


  function handleName(event) {
    setNewName(event.target.value)

  }

  function handleEmail(event) {
    setNewEmail(event.target.value)

  }

  const history = useHistory()

  function handleLogin() {

    fetch('http://localhost:8000/api/account', {
      body: JSON.stringify({ username: newName, email: newEmail }),
      headers: {
          'Content-Type': 'application/json'
       },
      method: 'POST'
    })
      .then((response) => response.json())
      .then(result => {
      console.log('Success:', result)
      update(newName)
      updateEmail(newEmail)
      history.push("/menu")
   })
      .catch(error => {
      console.error('Error:', error)
   })

  }
 

  return(
    <div>
    <Header />
    <div className="wrapper">
    <img id="logga" src={logo} alt="Airbean logga"/>
      <h1>Välkommen till Airbean-familjen!</h1>
      <p id="text-signup">Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      <form>
          <label>
            <p className="label">Name</p>
            <input className="form" type="text" onChange={ handleName }  />
          </label>
          <label>
          <p className="label" id="email">E-post</p>
            <input className="form" type="text" onChange={ handleEmail } />
          </label><br></br>
          <label>
          <input id="radio" type="radio"></input>GDPR Ok!
          </label><br></br>
        <button id="login" type="button" onClick={ handleLogin }>Log in</button>
      </form>
    </div>
    </div>
  )
}


export {Signup, UserContext, EmailContext}