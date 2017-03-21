import React from 'react';
import ReactDOM from 'react-dom';

var AddState = React.createClass ({

    addNew: function() {
        alert("add new contact");
    },

    render: function() {
        return (
            <div className="app">
                <a className="action-icon" onClick={this.props.navToList} >X</a>
                    <div className="heading">
                        <h1>Add a team member</h1>
                        <h2>Fill in team member infomation below.</h2>
                    </div>
                    <hr className="line-style"/>
                    <div className="inputArea">
                        <form className="formArea">
                            <h3>Info</h3>
                            <input type="text" id="first_name" placeholder="First name" />
                            <input type="text" id="last_name" placeholder="Last name" />
                            <input type="text" id="phone" placeholder="Phone number" />
                            <input type="text" id="email" placeholder="Email address" />
                            <h3>Role</h3>
                            <label className="control control--radio">Admin - Can delete members
                              <input type="radio" name="radio" value="admin"/>
                              <div className="control__indicator"></div>
                            </label>
                            <label className="control control--radio">Regular - Cannot delete
                              <input type="radio" name="radio" value="regular" defaultChecked/>
                              <div className="control__indicator"></div>
                            </label>
                        </form> 
                    </div>
                    <hr className="line-style"/>
                    <div className="actionButtons">
                        <input className="green" type="submit" value="Save" onClick={this.addNew}/>
                    </div>
                <br/>
            </div>
        )
    }
});

export default AddState;
