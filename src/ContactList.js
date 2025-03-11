import React from 'react'

const ContactList = (props) => {
    const { contact, removeContact} = props
    // console.log(contact,'from contactlist')
    
  return (
    <div>
        {
            contact.map((val,i)=>{
                return(
                    <div key={val.id} className='contactlist'>
                        <h4>{i+1}. </h4>
                        <p>Name : {val.data.name}</p>
                        <p>Email : {val.data.email}</p>
                        <div>
                            <button onClick={()=>removeContact(val.id)} className='btn'>delete</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ContactList