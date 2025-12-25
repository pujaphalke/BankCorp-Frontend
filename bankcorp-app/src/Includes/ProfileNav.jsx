import React from 'react'

function ProfileNav() {
   
  const userJson = localStorage.getItem('user');
  const {username, usertype} = JSON.parse(userJson); 
  return (
    <>
    <div>
        <h3>ProfileNav</h3>
    </div>
    
    </>
  )
}

export default ProfileNav
