import React, { Component } from 'react';
import './App.css';

class Member extends Component {
  render() {
    return (
        <div className="member">
            <div className="left">
                <img className="icon" src="http://bitbyte.site/hash/user2.png"/>
            </div>
            <div className="right">
                <p><strong>{this.props.name}</strong> {this.props.role}</p>
                <p>{this.props.phone}</p>
                <p>{this.props.email}</p>
            </div>
            <div className="clear"></div>
            <hr className="line-style"/>
        </div>
    );
  }
}

export default Member;
