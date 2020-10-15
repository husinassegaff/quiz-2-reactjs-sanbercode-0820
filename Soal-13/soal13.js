// replace App.js with this code

import React, {Component} from 'react';

class UserInfo extends Component{
  render(){
    const img={
      width: "100%",
      "object-fit": "cover",
      height: "200px",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px"
    }
    const card = {
      border: "1px solid black",
      display: "inline-block",  
      width: "40%",
      margin: "10px",
      "border-radius": "10px",
      "box-shadow": "#aaa"
    }

    const container={
      padding: "10px"
    }

    var callname = this.props.item.gender === "Male" ? "Mr" : "Mrs"
    return (
      <div style={card}>
        <img src={this.props.item.photo} style={img} alt="Avatar"/>
        <div style={container}>
          <h4><b>{callname} {this.props.item.name}</b></h4> 
          <p>{this.props.item.profession}</p> 
          <p>{this.props.item.age} years old</p> 
        </div>
      </div>
    ) 
  }
}


function App() {
  const data = [
    {name: "John", age: 25, gender: "Male", profession: "Engineer", photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"},
    {name: "Sarah", age: 22, gender: "Female", profession: "Designer", photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"},
    {name: "David", age: 30, gender: "Male", profession: "Programmer", photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"},
    {name: "Kate", age: 27, gender: "Female", profession: "Model", photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }
  ]
  return (
    <>
      <div style={{width: "60%", margin: "0 auto"}}>
        {
          data.map((el, idx)=>{
            return(          
              <UserInfo key={idx} item={el}/>
            )
          })
        }
      </div>

    </>
  );
}

export default App;
