import React from 'react'
import PropTypes from 'prop-types';
const Profile = ({fullName,bio,profession,children,a}) => {
  return (
    <div>
     <h1>
     {fullName}</h1>
      <h1>{bio}</h1>
      <h1>{profession}</h1>
     
     {children}
     <button onClick={a}> Click Me</button>;



    </div>
  )
}
Profile.propTypes = {
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string
}

export default Profile
