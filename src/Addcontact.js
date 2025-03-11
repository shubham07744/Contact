import React, { useState } from 'react'

const Addcontact = ({addcontact}) => {
    const[contactData, setContactData] = useState({name:"", email:""})

    const handleChange=(e)=>{
        // setContactData({...contactData, [e.target.name]:e.target.value})
        if(e.target.name === "name"){
            setContactData({...contactData, name:e.target.value})
        }else{
            setContactData({...contactData, email:e.target.value})
        }
    }

    const handleAdd=()=>{
        if(contactData.name === "" || contactData.email === ""){
            alert("Please fill all the fields")
            return
        }
        // console.log(contactData)
        addcontact(contactData)
        setContactData({name:"", email:""})
    }

  return (
    <div align="center">
        <h2> Add Contact</h2>
       <form>
            <label>Enter Name : </label>
            <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange} className='inputcot' /><br/>
            <label>Enter e-Mail : </label>
            <input type='email' placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange} className='inputcot'   />
       </form>
       <button onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default Addcontact