import './profile.css'
import profile from '../../assets/profile.png'

import Header from '../../components/header'
import History from '../../components/History'
import { UserContext, EmailContext } from '../../App.js'

import { useContext } from 'react'

function Profile() {

  const username = useContext(UserContext)
  const email = useContext(EmailContext)
  


  return (
    <div>
         <Header />
    <div id="profile">
    <img src={profile} alt="Profilbild"/>

    <h3 className="username-text">{ username }</h3>
    <h3 className="email-text">{ email }</h3>


    <h2 id="text-profile">Orderhistory</h2>

    <History />
    </div>
    </div>
  )
}

export default Profile


