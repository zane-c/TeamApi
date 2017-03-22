import React from 'react'

/*
    Simple React component that encapsulates
    a member. Each member will be a short listing
    that contains an icon, name, role, email, and
    phone field. Clicking on a member should call
    the edit view with the proper member data
*/
const Member = React.createClass ({

  render: function() {
    return (
        <div id={this.props.memberId} className="member" onClick={this.props.navToEdit}>
            <div className="left">
                <img className="icon" src="http://bitbyte.site/hash/user4.png"/>
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
