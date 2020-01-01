import React, { Component } from "react";

export class Notification extends Component {
  constructor(props) {
    super(props);

    this.notificationRef = React.createRef();

    this.closeNotification = this.closeNotification.bind(this);
  }

  closeNotification() {
    this.notificationRef.current.parentNode.removeChild(
      this.notificationRef.current
    );
  }

  render() {
    const messages = this.props.messages || [];
    const type = this.props.type ? this.props.type : "info";
    return (
      <div className={"notification is-" + type} ref={this.notificationRef}>
        <button className="delete" onClick={this.closeNotification}></button>
        {messages.map(message => (
          <>
            <strong>{message.title ? message.title : "Error: "}</strong>
            {message.message}
          </>
        ))}
      </div>
    );
  }
}
