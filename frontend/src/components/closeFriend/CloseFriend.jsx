import React from 'react'
import './CloseFriend.css'

const CloseFriend = ({user}) => {
  return (
    <li className="sidebarFriend">
    <img src={user.profilePicture} className='sidebarFriendImg' alt="" />
    <span className='sidebarFriendName'>{user.username}</span>
  </li>
  )
}

export default CloseFriend