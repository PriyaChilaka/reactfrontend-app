import './App.css'

import { useState, createContext } from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import about from './views/about/about'
import menu from './views/menu/menu'
import profile from './views/profile/Profile'
import { Signup }  from './views/signup/Signup'
import orderstatus from './views/orderstatus/orderstatus'
import nav from './views/nav/nav'

const UserContext = createContext(undefined)
const EmailContext = createContext(undefined)


function App() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');

  return (
<div className="App">
      <BrowserRouter>
      <UserContext.Provider value={ username }>
      <EmailContext.Provider value={ email }>
      <Switch>
      <Route path="/" component={ () => <Signup update={ setUsername } updateEmail={ setEmail } /> } exact />
        <Route path="/About" component={ about } />
        <Route path="/Menu" component={ menu } />
        <Route path="/Profile" component={ profile } />
        <Route path="/Orderstatus" component={ orderstatus } />
        <Route path="/Nav" component={ nav } />
      </Switch>
      </EmailContext.Provider>
      </UserContext.Provider>
    
      </BrowserRouter>
    </div>
  )
}

export { App, UserContext, EmailContext, Signup }