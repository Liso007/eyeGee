import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
                              <div className="grid-1">

           <div className="usermap">
   <div className="username"><h1>Location</h1></div>
<div className="userpic">
<img src={Bot} alt='bot'/>
</div>
</div>

<Map/>

<button className="locbtn">Find</button>
</div >

<div className="grid-2">

  <div className="usermap">
     <div className="username"><h1>Location</h1></div>
      <div className="userpic">
        <img src={Bot} alt='bot'/>
   </div>
</div>
<Locater/>

<button className="locbtn">Return</button>
</div >
      </div>
    )
  }
}

export default User;

