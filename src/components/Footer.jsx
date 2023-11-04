import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyle>
        <div className="container">
            <h1>Chattusa Online Chat Rooms</h1>
            <h2><i className="fa-regular fa-copyright"></i> 2018 - The best free online usa and international chat rooms. Chat online with anyone from all around the world and meet new people. <Link to="/contact">Contact</Link></h2>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
background: #f7f7f7;
h1{
display: flex;
justify-content: center;
font-size: 24px;
font-weight: 200;
letter-spacing: 1px;
}
h2{
    color: #555;
    font-size: 16px;
    font-weight: 100;
    display: flex;
    justify-content: center;
    gap: 0 10px;
}
a{
    text-decoration: none;
}
@media only screen and (max-width: 600px) {
h1{
display: flex;
justify-content: center;
font-size: 12px;
font-weight: 200;
letter-spacing: 1px;
}
h2{
    font-size: 8px;
    font-weight: 100;
    gap: 0 1px;
}
a{
    padding: 0;
    text-decoration: none;
    font-size: 8px;
}
}
`

export default Footer