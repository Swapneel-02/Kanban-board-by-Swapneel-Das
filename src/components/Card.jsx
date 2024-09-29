import React from 'react'
import './../styles/card.css'
import UserIcon from './UserIcon'
import { getStatusIcon } from '../constants/imageConstants'


const Card = ({ ticket, userData, hideStatusIcon, hideProfileIcon }) => {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
        <img src='/icons_FEtask/3 dot menu.svg' alt='dot-menu'/>
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
