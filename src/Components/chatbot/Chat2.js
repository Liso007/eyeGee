import React, { Component } from "react";

import CustomChatbot from "./Chat1";

export class Chat2 extends Component {
    render() {
        return (
            <div className="card2">
              <div className="container">
                 <CustomChatbot  />
              </div>
            </div>
        )
    }
}

export default Chat2;
