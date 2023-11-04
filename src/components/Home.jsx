import React, { useContext,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { Context } from '../Context';
import { Link, useParams } from 'react-router-dom';



const Home = () => {
    const { Users,filteringUsers,setUsersFilter,usersFilter,myMessage,setMessage,SendMessage,message,navigate,setBars,setEnvelope } = useContext(Context);
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const gender = localStorage.getItem("gender");
    const country = localStorage.getItem("country");

    const messageEnd = useRef(null)
    const { id } = useParams();

    const User = Users.filter(el => {
        return el.id == id
    })

    useEffect(() => {
        document.querySelector(".cards").addEventListener("click",() =>{
            setBars(false);
            setEnvelope(false)
        })
    },[])

    useEffect(() => {
        if (!name || !age || !gender || !country) {
            navigate("/")
        }
    },[])

    useEffect(() =>{
        messageEnd.current?.scrollIntoView()
    },[User])
   
return (
<HomeStyle>
    <div className="container">
        <div className="cards">
            <div className="room">
                <div>
                 {
                    User.length ?
                    <div>
                        {User.map(el => {
                            return(
                            <div key={el.id} className='usernav'>
                            <Link to="/home">x</Link>
                            <div>
                            <img src={el.avatar} alt="" />
                            <h2>{el.name}</h2>
                            </div>
                            <h3>{el.from}</h3>
                            </div>
                        )
                        })}
                    </div> :
                    <div className='roomnav'>
                    <Link to="/home">x</Link>
                    <h1>Chat</h1>
                    </div>
                 }
                    <div className='messages'>
                    {
                        User.length ?
                        <div className='message'>
                         {
                            User.map((el) => {
                                return(
                                <div key={el.id} className='usermessage'>
                                <img src={el.avatar} alt="" />
                                <h2>{el.message}</h2>
                                </div>
                                )
                            })
                         }
                        <div className='mymessage'>
                            <div className='cardsmessage'>
                             {
                                myMessage.map(el => {
                                    return <div className="cardmessage"><h2>{el}</h2></div>
                                })
                             }
                             </div>
                        </div>
                        </div> : 
                        <div className='message'>
                            <div>
                            <img src="" alt="" />
                            <h2>Welcome To Chattusa</h2>
                            </div>
                            <div>
                            <img src="" alt="" />
                            <h2>Hello {name} . You're {age} years old {gender} from {country}</h2>
                            </div>
                            <div>
                            <img src="" alt="" />
                            <h2>You can select someone to chat with from the Online Users list on the right 👉</h2>
                            </div>
                            </div>
                    }
                    <div ref={messageEnd}></div>
                </div>
             </div>

                <div className="inp">
                    <div>
                    <input type="text" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                    <button onClick={SendMessage}>SEND</button>
                    </div>
                </div>
            </div>

            <div className="users">
                <p className='title'>Users Online ( {Users.length} )</p>
                <div className='cards'>
                 {
                    filteringUsers.map((el) =>{
                        return(
                            <Link key={el.id} to={`/home/${el.id}`}>
                                <div className='card'>
                                <img src={el.avatar} alt="" />
                                <h4>{el.name}</h4>
                                <h5>{el.from}</h5>
                                </div>
                            </Link>
                        )
                    })
                 }
                </div>

                <div className='filter'>
                    <p>Filter:</p>
                    <div className="form-check">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" value="all" checked={usersFilter === ""}onChange={(e) => {setUsersFilter(e.target.value)}}/>
                     <label className="form-check-label" htmlFor="flexRadioDefault2">All</label>
                    </div>
                    <div className="form-check">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" value="male" onChange={(e) => {setUsersFilter(e.target.value)}}/>
                     <label className="form-check-label" htmlFor="flexRadioDefault2">Male</label>
                    </div>
                    <div className="form-check">
                     <input className="form-check-input" type="radio" name="flexRadioDefault" value="female" onChange={(e) => {setUsersFilter(e.target.value)}}/>
                     <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</HomeStyle>
)
}

const HomeStyle = styled.div`
background: #f7f7f7;
min-height: 615px;
padding:20px 0;
.container{
    width: 60%;
    margin: 0 auto;
}
.cards{
    display: flex;
    margin-top: 50px;
}
.roomnav{
    display: flex;
    background: #75caeb;
    box-shadow: 0 1px 30px rgba(0,0,0,.2);
    padding: 10px 10px;
}
.room{
    width: 100%;
    box-shadow: 0 10px 20px rgba(0,0,0,.15);
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.users{
    width: 50%;
}
.roomnav h1{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    font-size: 22px;
    color: #555;
}
.room a{
    background:  #158CBA;
    color: white;
    border-radius: 50%;
    padding-bottom: 4px;
    width: 28px;
    min-height: 28px;
    border: none;
    display: flex;
    justify-content: center;
}
.messages{
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    background-color: lightblue;
    min-height: 300px;
    max-height: 300px;
    overflow: auto;
}
.messages .message div{
    display: flex;
    align-items: center;
}
.messages img{
    background: #158CBA;
    height: 50px;
    min-width: 50px;
    border-radius: 50%;
}
.messages h2{
    background-color: #e5e5e5;
    margin-left: 20px;
    font-size: 16px;
    padding: 10px 5px;
    color: white;
    margin-top: 10px;
    color: #555;
    font-weight: 300;
    max-width: 60%;
}
.room .inp{
    display: flex;
    justify-content: center;
    background: #f4f4f4;
    padding: 15px 0;
    box-shadow: 0 -8px 35px -15px rgba(0,0,0,.31);
}
.room .inp div{
    display: flex;
    width: 80%;
}
.room .inp input{
    width: 100%;
    height: 40px;
    border: 1px solid #555;
    border-radius: 5px 0 0 5px;
    color: #555;
}
.room .inp button{
    padding: 4px 7px;
    border: none;
    background: #158CBA;
    border-radius: 0 5px 5px 0;
    color: white;
}
.users{
    background: #333;
    border-radius: 0 7px 7px 0;
}
.users .title{
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    font-size: 18px;
}
.users .cards {
    display: flex;
    flex-direction: column;
    margin: 0;
    overflow-y: auto;
}
.users .card img{
    width: 40px;
    height: 40px;
}
.users .card{
    padding: 10px 30px;
    position: static;
    gap: 0 10px;
    background: #333;
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    align-items: center;
    
}
.users .card h4{
    color: white;
    font-weight: 200;
}
.users .card h5{
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: flex-end;
    color: white;
    font-weight: 100;
}

.filter{
    padding: 10px 30px;
    display: flex;
    gap: 0 10px;
}
.filter p{
    color: white;
    margin-bottom: 2px;
}
.filter label{
    color: white;
}
.form-check-input:checked {
    background-color:#0d6efd;
    border-color: #0d6efd;
}
.usernav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #75caeb;
    box-shadow: 0 1px 30px rgba(0,0,0,.2);
    padding: 10px 10px;
}
.usernav img{
    width: 30px;
    height: 30px;
}
.usernav button{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background:  #158CBA;
    color: white;
    padding: 0;
    border: none;
}
.usernav div{
    display: flex;
    align-items: baseline;
}
.usernav h2{
    color: white;
    font-size: 18px;
    padding-left: 7px;
    font-weight: 200;
}
.usernav h3{
    color: white;
}
.mymessage{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    right: 0;
    align-items: center;
}

.cardsmessage{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.cardmessage{
    display: flex;
    width: 100%;
    justify-content: flex-end;
}
.cardmessage h2{
    background: white;
    min-width: max-content;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
a{
    text-decoration: none;
}

@media only screen and (max-width: 600px) {
.container{
    width: 90%;
    margin: 0 auto;
}
.cards{
    display: flex;
    margin-top: 10px;
}
.roomnav{
    box-shadow: 0 1px 30px rgba(0,0,0,.2);
    padding: 5px;
}
.room{
    min-height: 150px;
}
.users{
    width: 50%;
}
.roomnav h1{
    font-size: 14px;
}
.room a{
    font-size: 10px;
    padding-top: 2px;
    width: 20px;
    min-height: 20px;
}
.messages{
    padding: 5px;
    gap: 10px 0;
    min-height: 250px;
}
.messages img{
    height: 30px;
    min-width: 30px;
}
.messages h2{
    margin-left: 10px;
    font-size: 10px;
    padding: 5px;
    margin-top: 5px;
}
.room .inp{
    padding: 5px 0;
    box-shadow: 0 -8px 35px -15px rgba(0,0,0,.31);
}
.room .inp div{
    display: flex;
    width: 80%;
    align-items: center;
}
.room .inp input{
    width: 100%;
    height: 20px;
    font-size: 10px;
}
.room .inp input:focus{
    outline:none;
}
.room .inp button{
    padding: 4px 4px;
    font-size: 8px;
}
.users .title{
    margin: 5px 0;
    font-size: 12px;
}
.users .card img{
    width: 20px;
    height: 20px;
}
.users .card{
    padding: 10px;
    align-items: center;
}
.users .card h4{
    font-size: 12px;
    font-weight: 200;
}
.users .card h5{
    font-size: 12px;
}

.filter{
    padding: 5px 10px;
    gap: 0 10px;
}
.filter p{
    color: white;
    font-size: 12px;
}
.filter label{
    color: white;
    font-size: 12px;
}
.form-check-input:checked {
    background-color:#0d6efd;
    border-color: #0d6efd;
}
.form-check-input{
   width: 15px;
   height: 13px;
}
.usernav{
    padding: 5px;
    align-items: center;
}
.usernav img{
    width: 20px;
    height: 20px;
}
.usernav button{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background:  #158CBA;
    color: white;
    padding: 0;
    border: none;
}
.usernav div{
    display: flex;
    align-items: baseline;
}
.usernav h2{
    color: white;
    font-size: 12px;
    padding-left: 7px;
    font-weight: 200;
}
.usernav h3{
    color: white;
    font-size: 12px;
}
.mymessage{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    right: 0;
    align-items: center;
}

.cardsmessage{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.cardmessage{
    display: flex;
    width: 100%;
    justify-content: flex-end;
}
.cardmessage h2{
    background: white;
    min-width: max-content;
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
a{
    text-decoration: none;
}
.form-check{
    display: flex;
    align-items: center;
    gap: 0 10px;
}
min-height: 450px;
}
`

export default Home