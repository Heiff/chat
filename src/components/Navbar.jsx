import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Context } from '../Context';
const Navbar = () => {
    const { Users,volume,setVolume,male,female,bars,envelope,Buttons,Logout } = useContext(Context);
    const name = localStorage.getItem("name");
    const gender = localStorage.getItem("gender");
    const country = localStorage.getItem("country");

return (
<NavbarStyle>
    <div className='container'>
        <div className="nav">
            <div className='dv'>
                <img src="https://chattusa.com/img/free-chat-now-chattusa.png" alt="" />
                {name ? 
                <div className='btns'>
                    <button onClick={(e) =>setVolume(!volume)}>{volume ? <i className="fa-solid fa-volume-high"></i> :  <i className="fa-solid fa-volume-xmark"></i>}</button> 
                    <div className='envelope'>
                        <button onClick={(e) =>Buttons("envelope")}><sub><i className="fa-solid fa-envelope"></i><sup>{Users.length}</sup></sub></button>
                        {envelope ?
                        <div className='message'>
                        {
                        Users.map(el => {
                        return(
                        <Link key={el.id} to={`/home/${el.id}`}>
                            <div className='card'>
                                <img src={el.avatar} alt="" />
                                <p>{el.name}</p>
                                <p>{el.from}</p>
                            </div>
                        </Link>
                        )
                        })}
                        </div> : null}
                    </div>
                    <div className='dropdown'>
                    <button onClick={(e) => Buttons("bars")}><i className="fa-solid fa-bars"></i></button>
                        {bars ? 
                        <div className='myInfo'>
                            <div>
                            {(gender === "male") ? <img src={male} alt="" /> : <img src={female} alt="" />}
                            <p>{name}</p>
                            <p>{country}</p>
                            </div>
                            <Link to='/about'>Help</Link>
                            <button onClick={Logout}>Logout</button>
                        </div> : null
                        }
                    </div>
                </div> : <div className='btnsnavbar'><Link to='/'>Home</Link> <Link to='/about'>About</Link></div>}
                {name ? "" : <Link to='/contact'>Contact Us</Link>}
            </div>
        </div>
    </div>
</NavbarStyle>
)
}

const NavbarStyle = styled.div`
background: white;
padding: 10px 0;
border-bottom:4px solid #f2f2f2;
border-left: 1px solid #f2f2f2;
border-right: 1px solid #f2f2f2;
.container{
    width: 80%;
    margin: 0 auto;
}
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.dv img{
    width: 200px;
    height: 50px;
}
.nav a{
    color: rgba(0,0,0,.5);
    text-decoration: none;
}

.dv{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btnsnavbar{
    display: flex;
    gap: 0 20px;
    margin-right: 100px;
}
.btns{
    display: flex;
    gap: 0 30px;
}
.btns i{
    font-size: 22px;
}
.btns button{
    border: 1px solid #f2f2f2;
    border-bottom: 4px solid #f2f2f2;
    width: 65px;
    height: 44px;
    background: none;
}
.message{
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    background: white;
    position: absolute;
    border: 1px solid #f2f2f2;
    border-bottom: 4px solid #f2f2f2;
    padding: 10px;
    min-width: 160px;
    border-radius: 5px;
}
.message .card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: none;
}
.card img{
    width: 40px;
    height: 40px;
}
.myInfo{
    display: flex;
    flex-direction: column;
    background: white;
    position: absolute;
    border: 1px solid #f2f2f2;
    border-bottom: 4px solid #f2f2f2;
    padding: 10px;
    min-width: 120px;
    border-radius: 5px;
}
.myInfo a{
    padding-left: 35px;
}
.myInfo button{
    width: 70%;
    height: max-content;
    padding: 0;
    border: none;
    color: #555;
    padding-left: 30px;
}
.myInfo div{
    display: flex;
    gap: 10px 4px;
    align-items: center;
}
.dropdown img{
    width: 30px;
    height: 30px;
}
.dropdown p{
    margin: 0;
    padding: 0;
}
.btns button sub sup{
    color: red;
    padding-left:5px;
    font-size: 14px;
}

@media only screen and (max-width: 600px) {
.container{
    width: 90%;
    margin: 0 auto;
}
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.dv img{
    width: 80px;
    height: 20px;
}
.nav a{
    font-size: 10px;
}
.dv{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btnsnavbar{
    display: flex;
    gap: 0 20px;
    margin-right: 100px;
}
.btns{
    display: flex;
    gap: 0 30px;
}
.btns i{
    font-size: 10px;
}
.btns button{
    width: 30px;
    height: 30px;
}
.message{
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    padding: 5px;
    min-width: 90px;
}
.message .card{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.card img{
    width: 20px;
    height: 20px;
}
.myInfo{
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 5px;
    min-width: 70px;
    right: 0;
}
.myInfo a{
    padding-left: 25px;
}
.myInfo button{
    width: 70%;
    padding: 0;
    padding-left: 20px;
    font-size: 10px;
}
.myInfo div{
    gap: 5px 4px;
}
.dropdown img{
    width: 20px;
    height: 20px;
}
.dropdown p{
    font-size: 10px;
}
.btns button sub sup{
    padding-left:5px;
    font-size: 8px;
}
}

`

export default Navbar