import React, { useState } from 'react'
import { MdMessage } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";


const Contactform = () => {

  const [name, setName]= useState("default");
  const [email, setEmail]= useState("default");
  const [text, setText]= useState("default");
  


  const oncall=()=>{
    console.log("calling is active Now")
  }
  const onMsg = ()=>{
    console.log("Message is Active Now")
  }

  const onMail =()=>{
    console.log("Mailing Is Active Now")
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

    console.log({
      name,
      email,
      text
    })
  }
  return (
    <>
    <section className='container-2'>
    <div>
        <div className='main-btn'>
        <div className='sec-btn'>
        <button onClick={onMsg} className='btn'><MdMessage />VIA SUPPORT CHAT</button>
        <button onClick={oncall} className='btn'><MdAddIcCall />VIA CALL</button>
        </div> 
        <button onClick={onMail} className='btn-2'><SiMinutemailer />VIA EMAIL FORM</button> 
        </div>

       <div className='main-form'>
       <form onSubmit={onSubmit}>
       <div className='input1'>
        <label>Name</label>
        <input type='text' name='name'></input>
        </div>

        <div className='input2'>
        <label>Email</label>
        <input type='email' name='name'></input>
        </div>

        <div className='input3'>
        <label>Text</label>
        <input type='text' name='name'></input>
        </div>

        <div className='submit-btn'>
        <button className='btn'>SUBMIT BUTTON</button>
        </div>
        <div>{name + " "+ email + " " + text}</div>
       </form>

       </div>
       
        </div>
        <div>
        <img src='/images/main.png' alt='imgg'></img>
       </div>
        
    </section>
    </>
  )
}

export default Contactform
