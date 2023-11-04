import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactStyle>
        <div className="container">
            <div className="contact">
                <img src="https://chattusa.com/img/free-chat-now-chattusa.png" alt="" />
                <h1>Online Chat Rooms Without Registration</h1>
                <h2>Contact Us Below</h2>
                <div className='card'>
                   <div>
                    <p>Name:*</p>      
                    <input type="text" />
                    <p>Email:*</p>      
                    <input type="email" />    
                    <p>Subject:*</p>      
                    <input type="text" />    
                    <p>Message:*</p>      
                    <input type="text" />     
                    <div className='btn'>
                    <button>SEND MESSAGE</button>    
                    </div>   
                   </div>
                </div>
            </div>
        </div>
    </ContactStyle>
  )
}

const ContactStyle = styled.div`
background: #f7f7f7;
.container{
    width: 80%;
    margin: 0 auto;
}
.contact{
    padding: 30px 0;
}
.contact img{
width: 400px;
display: flex;
justify-content: center;
margin: 0 auto;
}
.contact h1{
    color: #555;
    font-weight: bolder;
    font-size: 22px;
    display: flex;
    justify-content: center;
    letter-spacing: 1px;
}
.contact h2{
    color: lightgray;
    font-size: 20px;
    font-weight: 100;
    display: flex;
    justify-content: center;
}
.card{
    display: flex;
    justify-content: center;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
}
.card div{
    width: 300px;
    margin: 0 auto;
    padding: 32px 0;
}
.card input{
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
}
.card p{
    font-size: 14px;
    color: #555;
    font-weight: 400;
}
.btn{
    display: flex;
    justify-content: flex-end;
}
.btn button{
    background: #157CBA;
    border: 1px solid #127ba3;
    border-bottom: 4px solid #127ba3;
    color: white;
    padding: 5px 7px;
    font-size: 12px;
    border-radius: 5px;
}

@media only screen and (max-width: 600px) {
.container{
    width: 90%;
    margin: 0 auto;
}
.contact{
    padding: 5px 0;
}
.contact img{
width: 150px;
display: flex;
justify-content: center;
margin: 0 auto;
}
.contact h1{
    font-size: 14px;
}
.contact h2{
    font-size: 12px;
    font-weight: 100;
}
.card{
    display: flex;
    justify-content: center;
}
.card div{
    width: 300px;
    margin: 0 auto;
    padding: 32px 0;
}
.card input{
    width: 100%;
    height: 40px;
    margin-bottom: 5px;
    border-radius: 4px;
}
.card p{
    font-size: 12px;
}
.btn{
    display: flex;
    justify-content: flex-end;
}
.btn button{
    padding: 4px 4px;
    font-size: 8px;
    border-radius: 5px;
}

}
`

export default Contact