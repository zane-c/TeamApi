import React from 'react';
import ReactDOM from 'react-dom';

var EditState = React.createClass ({

    saveMember: function() {
        alert("save");
    },

    deleteMember: function() {
        alert("delete");
    },

    render: function() {
        return(
            <div className="app">
                <a className="action-icon" onClick={this.props.navToList} >X</a>
                <div className="heading">
                    <h1>Edit team member</h1>
                    <h2>Edit the member information below.</h2>
                </div>
                <hr className="line-style"/>
                <div className="inputArea">
                    <form className="formArea">
                        <h3>Info</h3>
                        <input type="text" id="first_name" defaultValue={this.props.fname} placeholder="First name"/>
                        <input type="text" id="last_name" defaultValue={this.props.lname} placeholder="Last name" />
                        <input type="text" id="phone" defaultValue={this.props.phone} placeholder="Phone number" />
                        <input type="text" id="email" defaultValue={this.props.email} placeholder="Email address" />
                        <h3>Role</h3>
                        <label className="control control--radio">Admin - Can delete members
                          <input type="radio" name="role" value="admin" defaultChecked={this.props.roleAdmin}/>
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio">Regular - Cannot delete
                          <input type="radio" name="role" value="regular" defaultChecked={this.props.roleRegular}/>
                          <div className="control__indicator"></div>
                        </label>
                    </form> 
                </div>
                <hr className="line-style"/>
                <div className="actionButtons">
                    <input className="green" type="submit" value="Save" onClick={this.saveMember}/>
                    <input className="red" type="submit" value="Delete" onClick={this.deleteMember}/>
                </div>
                <br/>
            </div>
        )
    } 
});

export default EditState;
