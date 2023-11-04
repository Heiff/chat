import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutStyle>
        <div className="container">
            <div className="about">
                <img src="https://chattusa.com/img/free-chat-now-chattusa.png" alt="" />
                <h1>Online Chat Rooms Without Registration</h1>
                <h2>USA Chat Rooms</h2>
                <div>
                    <h3>About Chattusa</h3>
                    <p>CHATTUSA is a free online chat room for people all over the world. It helps you meet new people, single women and men and make new friends.</p>
                    <p>We don't log or keep users' data and messages, making Chattusa totally Anonymous and secure.</p>
                    <p>If you want to protect your username and reserve it for personal use only, then you can sign up with your email and keep your nickname safe</p>
                    <p>If you encounter any types of issues, please contact us</p>                    
                </div>

            </div>
        </div>
    </AboutStyle>
  )
}

const AboutStyle = styled.div`
background: #f7f7f7;
.container{
    width: 80%;
    margin: 0 auto;
}
.about{
    padding: 30px 0;
}
.about img{
width: 400px;
display: flex;
justify-content: center;
margin: 0 auto;
}
.about h1{
    color: #555;
    font-weight: bolder;
    font-size: 22px;
    display: flex;
    justify-content: center;
    letter-spacing: 1px;
}
.about h2{
    color: lightgray;
    font-size: 20px;
    font-weight: 100;
    display: flex;
    justify-content: center;
}
.about div{
    margin-top: 20px;
    padding: 32px 32px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
}
.about div h3{
    font-size: 26px;
    color: #555;
    font-weight: 100;
    margin: 0;
    padding-bottom: 15px;
}
.about div p{
    font-size: 16px;
    color: #555;
    font-weight: 400;
}

@media only screen and (max-width: 600px) {
.container{
    width: 90%;
    margin: 0 auto;
}
.about{
    padding: 10px 0;
}
.about img{
width: 150px;
}
.about h1{
    font-size: 14px;
}
.about h2{
    font-size: 12px;
}
.about div{
    margin-top: 10px;
    padding: 10px;
}
.about div h3{
    font-size: 12px;
    color: #555;
    font-weight: 100;
    margin: 0;
    padding-bottom: 10px;
}
.about div p{
    font-size: 10px;
    color: #555;
    font-weight: 400;
}
}
`

export default About