import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../Context'

const Login = () => {
    const {gender,setGender,setName,setCountry,setAge,LoginFunc} = useContext(Context);
    
return (
<LoginStyle>
    <div className="container">
        <div className='login'>
            <div className='logo'>
                <img src="https://chattusa.com/img/free-chat-now-chattusa.png" alt="" />
            </div>
                <h1 className='title'>Online Chat Rooms Without Registration</h1>
                <h2 className='name'>USA Chat Rooms</h2>
            <div className='card'>
                <h1>Join Chat:</h1>
                <form onSubmit={LoginFunc}>
                <div className="inputs">
                    <p>Username:</p>
                    <input className='inp' minLength={6} type="text" required  onChange={(e) => {setName(e.target.value)}} />
                    <p>Country:</p>
                    <select className='inp' name="country" required="required" onChange={(e) => {setCountry(e.target.value)}} >
                        <option value="">Select Country</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="RU">Russia</option>
                        <option value="US">United States</option>
                    </select>
                        <p>Age:</p>
                        <input className='inp' type="number" required={true} onChange={(e) => {setAge(e.target.value)}} />
                        <p>Gender:</p>
                        <div className='radio'>
                        <div className="form-check">
                        <input className="form-check-input" required type="radio" name="flexRadioDefault" value="male" onChange={(e) => {setGender(e.target.value)}}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" value="female" onChange={(e) => {setGender(e.target.value)}}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                        </div>
                        </div>
                        <p className='ava'>Avatar:</p>
                        {(gender === "male") ? <img className='avatar' src="https://chattusa.com/img/128/male-0.png" alt="" /> : null}
                        {(gender === "female") ? <img className='avatar' src="https://chattusa.com/img/128/female-49.png" alt="" /> : null}
                </div>
                     
                    <div className='btn'>
                    <button type='submit' onClick={(e) =>LoginFunc(e)}><i className="fa-solid fa-right-to-bracket"></i>Login</button>
                    </div>
                </form>
                
                <p className='terms'>By joining the Chat you agree to our<Link to='/terms'> Terms and Conditions</Link></p>
                <p className='text'>Please read the Chat Rules below before joining to avoid getting banned.<span>KEEP IT CLEAN!</span></p>

            </div>
        </div>

        <div className='cards'>
            <div className="card1">
                <h1>Chat Rules:</h1>
                <h2>Please read the following rules before joining the chat rooms. Any violation will get you banned from the Chat.</h2>
                <p>No Spam: <span>Do not spam chat users with random or automated messages.</span></p>
                <p>No Provocation: <span>Do not attack or harass others because of their race, religion or anything that is personal.</span></p>
                <p>No Bad Links: <span>Do not send links to websites that are similar to Chattusa or websites that aren't authentic or look suspicious.</span></p>
                <p>No Sexual Harassment: <span>Do not attack or harass people of opposite gender and respect everyone online. Also we do not encourage sex-talk or any other practices here.</span></p>
                <p>Other rules: <span>Even if we didn't mention everything, any act that is considered a bad behavior will result in a permanent ban.</span></p>
                <h6>Please keep the chat clean or you might get banned for any of the rules mentioned above. We are also working on a "Report" feature that will let you report bad users easily.</h6>
                <h6>We do not keep our users' data or messages sent here, Chattusa automatically deletes all your message history whenever you logout, making Chattusa totally Anonymous and secure.</h6>
            </div>

            <div className="card2">
                <h1>Updates:</h1>
                <h2>More updates are coming... Keep checking this section every now and then!</h2>
                <p>05 October 2019: <span>We tweaked the chat room for an improved user experience by fixing some issues. We are also working on a new Report feature that allows user in the Chat to report other bad behaving users or bots.</span></p>
                <p>04 May 2019: <span>Minor bug fixes to the Chat. We are trying our best to keep the Chat rooms as clean as possible, we are banning bots and bad users every day. More than 30,000 users have been banned due to unwanted behavior.</span></p>
                <p>2 January 2019: <span>We fixed some bugs and improved the user experience. We also managed to ban more than 2000 users over the last 2 Months.</span></p>
                <p>11 October 2018: <span>We redesigned the home page making it easier to use and clutter-free. We also implemented a new Ban System that bans bad users and robots from the Chat, as well as a new contact us page so you can report issues to us.</span></p>
                <p>7 October 2018: <span>We fixed some bugs that caused 'new messages' not to display correctly, as well as made some improvements.</span></p>
                <p>3 October 2018: <span>We are working on a new Ban System that will get rid of bots and bad users permanently.</span></p>
            </div>
        </div>

            <p className='o'>We do not keep our users' data or messages sent here, Chattusa automatically deletes all your messages history whenever you logout, making Chattusa totally Anonymous and Secure.</p>

    </div>
</LoginStyle>
)
}

const LoginStyle = styled.div`
padding-top: 50px;
.logo img{
    width: 400px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.title{
    display: flex;
    justify-content: center;
    color: #555;
    font-size: 24px;
}
.name{
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: lightgray;
    font-weight: 400;
}
.card{
    width: 700px;
    margin: 0 auto;
    padding: 20px 40px;
    background: #fafafa;
    border-radius: 7px;
    box-shadow: inset 0 2px 0 rgba(0,0,0,.05)
}
.card h1{
    margin: 0;
}
.ava{
    min-height: 82px;
}
.inputs{
    margin:20px 0 10px 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px 0;
    min-height: 400px;
}
.inputs p{
    font-size: 22px;
    font-weight: 100 ;
    padding: 0;
    margin: 0;
}
.inputs .inp{
    background: white;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding-left: 10px;
}
.avatar{
    width: 60px;
    height: 60px;
}
.radio{
    display: flex;
    gap: 0 20px;
}
.card button{
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #dedede;
    border-bottom: 4px solid #dedede;
    margin: 20px 0;
}
.btn{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.terms{
    color: #555;
    font-weight: bolder;
    display: flex;
    justify-content: center;
}
.terms a{
    text-decoration: none;
    color: #158CBA;
    padding-left: 3px;
}
.text{
    display: flex;
    justify-content: center;
    color: #555;
    font-size: 14px;
}
.text span{
    font-weight: bolder;
}
.cards{
    width: 80%;
    margin: 30px auto;
    display: flex;
}
.card1{
    padding: 30px;
    border: 1px solid #dedede;
    border-top: 4px solid #dedede;
    border-radius: 7px;
    width: 100%;
}
.card2{
    padding: 30px;
    border: 1px solid #dedede;
    border-top: 4px solid #dedede;
    border-radius: 7px;
    width: 100%;
}
.card1 h1{
    color: #555;
    font-size: 26px;
    font-weight: bolder;
}
.card1 h2{
    color: #555;
    font-size: 14px;
    font-weight: 100;
    margin-bottom: 30px;
}
.card1 p{
    color: #555;
    background: #75CAEB;
    padding:10px;
    font-weight: 500;
    border-bottom: 4px solid #56bee6;
    border-radius: 7px;
}
.card1 span{
    color: white;
    font-weight: 100;
}
.card1 h6{
    color: #555;
    font-weight: 100;
    font-size: 16px;
    margin-top: 70px;
}
.card2 h1{
    color: #555;
    font-size: 26px;
    font-weight: bolder;
}
.card2 h2{
    color: #555;
    font-size: 14px;
    font-weight: 100;
    margin-bottom: 45px;
}
.card2 p{
    color: #555;
    background: #158CBA;
    padding:10px;
    font-weight: 500;
    border-bottom: 4px solid #127ba3;
    border-radius: 7px;
}
.card2 span{
    color: white;
    font-weight: 100;
}
.o{
    color: #555;
    font-weight: 100;
    margin:0;
    padding: 50px 0;
}

@media only screen and (max-width: 600px) {
.logo img{
    width: 150px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.title{
    display: flex;
    justify-content: center;
    font-size: 14px;
}
.name{
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
}
.card{
    width: 80%;
    margin: 0 auto;
    padding: 5px 10px;
}
.card h1{
    margin: 0;
    font-size: 14px;
}
.ava{
    min-height: 40px;
}
.inputs{
    margin:7px 0 0 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 7px 0;
    min-height: 200px;
}
.inputs p{
    font-size: 12px;
    font-weight: 100 ;
    padding: 0;
    margin: 0;
}
.inputs .inp{
    font-size: 10px;
    height: 20px;
    padding-left: 10px;
}
.avatar{
    width: 20px;
    height: 20px;
}
.radio{
    display: flex;
    gap: 0 10px;
}
.card button{
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    margin: 10px 0;
    font-size: 12px;
}
.btn{
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-end;
}
.terms{
    font-weight: bolder;
    display: flex;
    justify-content: center;
    font-size: 10px;
}
.terms a{
    padding-left: 3px;
}
.text{
    display: block;
    align-items: center;
    font-size: 7px;
}
.text span{
    width: max-content;
    font-weight: bolder;
}
.cards{
    width: 80%;

    margin: 10px auto;
    display: flex;
}
.card1{
    padding: 5px;
    border-radius: 7px;
    width: 100%;
}
.card2{
    padding: 5px;
}
.card1 h1{
    color: #555;
    font-size: 14px;
    font-weight: bolder;
}
.card1 h2{
    font-size: 10px;
    font-weight: 100;
    margin-bottom: 10px;
}
.card1 p{
    padding:5px;
    font-weight: 500;
    font-size: 10px;
}
.card1 span{
    font-size: 8px;
    font-weight: 100;
}
.card1 h6{
    font-weight: 100;
    font-size: 12px;
    margin-top: 40px;
}
.card2 h1{
    font-size: 14px;
    font-weight: bolder;
}
.card2 h2{
    font-size: 10px;
    font-weight: 100;
    margin-bottom: 22px;
}
.card2 p{
    padding:10px;
    font-size: 10px;
    font-weight: 500;
    border-radius: 7px;
}
.card2 span{
    font-size: 8px;
}
.o{
    font-size: 10px;
    padding: 10px 0;
}
}
`

export default Login