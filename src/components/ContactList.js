import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    
    const rendercontact = props.contact.map((contact) =>{
        return (
            < ContactCard contact={contact}/>
        )
    })
  return (
    
    <div className='ui celled list'>
     {rendercontact}
    </div>
  )
}

export default ContactList;
