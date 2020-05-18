import React from 'react';
import Navbar from './Components/Navbar';
// import ReactDOM from 'react-dom';
// var NewComponent = React.createClass({
import logo from './logo.png';
import axios from 'axios';
import './styles.css';


// createUser(){
//   let username=document.getElementById('username').value
//   let password=document.getElementById('password').value
//   let data={username: username,password: password}
//   axios.post('http://localhost:8080/createuser',data)
//  }

let isUserLogIn = false;

// const Test = () => {
//   return (<div >
//     <div className="toptab" >
//       <a href="home.html" > Home </a>
//       <a href="about.html" > About </a>
//       <a href="register.html" > Skills Survey </a>
//       <a href="shop.html" > Support Center </a>
//     </div>
//     <div className="container" >
//       <img src={logo}
//         height="135px"
//         width="325px" />
//       <div className="centered" > Login </div>
//     </div>

//   </div>
//   );
// };

function App() {

  return (
    <div>
      <Navbar />
      <div className="form">
        <p> Username </p>
        <input id='userinput'
          type="text" />
        <p> Password </p>
        <input id='userpassword'
          type="password" />
        <button onClick={tryToLogIn} > Log In </button> 
      </div>
      
    </div>
  )
  


  function tryToLogIn() {
    let adminData = [{
      username: 'admin1',
      password: 'pass1'
    }]
    let userData = [{
      username: 'user1',
      password: 'pass1'
    },
    {
      username: 'user2',
      password: 'pass2'
    },
    {
      username: 'user3',
      password: 'pass3'
    }
    ]
    let username = document.getElementById('userinput')
    let password = document.getElementById('userpassword')

    for (let i = 0; i < adminData.length; i++) {
      if (username.value == adminData[i].username &&
        password.value == adminData[i].password) {
        alert('Admin access granted')
        return
      }
    }
    for (let i = 0; i < userData.length; i++) {
      if (username.value == userData[i].username &&
        password.value == userData[i].password) {
        alert('User access granted')
        return
      }
    }
    alert('incorrect')
  }

return (
<div class="time">
    <button onclick="getCurrentTime()">Clock In</button>
    <h1 id='time'></h1>

    <button onclick="calculateTime()">Clock Out</button>
    <h1 id='totalWorkTime'></h1>


</div>
)
   

let hour;
// let dayornight;
let minute;
let second;
let startTime;

function getCurrentTime() {
  let currentTime = new Date();
  startTime = Date.now();
  hour = currentTime.getHours();
  // dayornight = 'AM';
  // if (hour > 12) {
  //   hour = hour - 12;
  //   dayornight = 'PM'
  // }
  minute = currentTime.getMinutes();
  second = currentTime.getSeconds();
  let time = document.getElementById('time');
  time.innerText = hour + ":" + minute + ":" + second
}

function calculateTime() {
  let endTime = Date.now();
  let totalMilliSeconds = endTime - startTime;
  let totalHours = totalMilliSeconds / 1000 / 60 / 60;
  console.log(totalHours)
  let result = document.getElementById('totalWorkTime')
  result.innerText = "Total Time Worked " + totalHours
}

//   return (
//   <div class="time">
//   <button onclick="getCurrentTime()">Clock In</button>
//   <h1 id='time'>hello</h1>

//   <button onclick="calculateTime()">Clock Out</button>


//   <h1 id='totalWorkTime'></h1>
//   </div>
//   )

}
    export default App;

