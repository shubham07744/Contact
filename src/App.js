import { useEffect, useState } from "react";
import uuid4 from "uuid4";
import Addcontact from "./Addcontact";
import ContactList from "./ContactList";


function App() {

  const localstoragekey = "contact"
  const[contact,setContact]=useState(()=>{
    const storedContacts = localStorage.getItem(localstoragekey)
    return storedContacts ? JSON.parse(storedContacts) : []
    // return JSON.parse(localStorage.getItem(localstoragekey) || [])
  })
  useEffect(()=>{
    localStorage.setItem(localstoragekey, JSON.stringify(contact))
  },[contact])
  
  const addcontact=(data)=>{
    // console.log(data,"from app.js")
    setContact([...contact,{id: uuid4(), data }])
  }
  const removeContact=(id)=>{
    const updatedList = contact.filter((val)=>{
      return val.id !== id;
    })
    setContact(updatedList)
  }
  
  return (
    <div className="App">
      <Addcontact addcontact={addcontact}/>
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
