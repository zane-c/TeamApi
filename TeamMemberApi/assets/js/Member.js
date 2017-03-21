import React from 'react';
import ReactDOM from 'react-dom';

var Member = React.createClass ({

  render: function() {
    return (
        <div id={this.props.memberId} className="member" onClick={this.props.navToEdit}>
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
    )
  }
});

export default Member;
