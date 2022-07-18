import React from 'react'


const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    const profile = require('../components/image/PASSPORT.jpg');
  return (
    <div className='item'>
            <div className='content'>
                <img className='ui avatar image'src={profile} alt="passport" style={{border:"2px solid blue"}}/>
                <div className='header'>
                    {name}
                </div>
                <div >{email}</div>

            </div>
            <i className='trash alternate outline icon' style={{color:'red',marginTop:'7px'}}/>
            </div>
  )
}

export default ContactCard;