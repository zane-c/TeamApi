import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Member from './Member';

var Ui = React.createClass ({

    loadMembers: function() {
        $.ajax({
            url: "http://127.0.0.1:8000/members",
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: [], mode: "list"};
    },

    listMode: function() {
        this.setState({mode: "list"});
    },

    renderList: function() {
        if (this.state.data) {
            var numMembers = Object.keys(this.state.data).length;
            var parent = this;
            var populateMembers = this.state.data.map(function(member) {
                var role = "";
                if (member.role == "admin") {
                    role = "(Admin)";
                }
                var editFunction = function() {
                    return parent.editMode(member);
                }
                return (<div className="memberHover" id={member.id} onClick={editFunction}>
                        <Member name={member.first_name + " " + member.last_name} 
                        phone={member.phone_number} email={member.email_address} role={role} />
                        </div>)
            })

            return (
              <div className="app">
                <a className="action-icon" onClick={this.addMode} >+</a>
                    <div className="heading">
                        <h1>Team members</h1>
                        <h2>You have {numMembers} team members.</h2>
                    </div>
                <hr className="line-style"/>
                    {populateMembers}
                <br/>
              </div>
            )
        }
    },

    addMode: function() {
        this.setState({mode: "add"});
    },

    renderAdd: function() {
        return (
          <div className="app">
            <a className="action-icon" onClick={this.listMode} >X</a>
                <div className="heading">
                    <h1>Add a team member</h1>
                    <h2>Fill in team member infomation below.</h2>
                </div>
                <hr className="line-style"/>
                <div className="inputArea">
                    <h3>Info</h3>
                    <input type="text" id="first_name" placeholder="First name" />
                    <input type="text" id="last_name" placeholder="Last name" />
                    <input type="text" id="phone" placeholder="Phone number" />
                    <input type="text" id="email" placeholder="Email address" />
                    <h3>Role</h3>
                    <form className="formArea">
                        <label className="control control--radio">Admin - Can delete members
                          <input type="radio" name="radio" value="admin" checked/>
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio">Regular - Cannot delete
                          <input type="radio" name="radio" value="regular"/>
                          <div className="control__indicator"></div>
                        </label>
                    </form> 
                </div>
                <hr className="line-style"/>
                <div className="actionButtons">
                    <input className="green" type="submit" value="Save" />
                </div>
            <br/>
          </div>
        )
    },

    editMode: function(member) {
        console.log(member);
        this.setState({mode: "edit", editData: member});
    },

    renderEdit: function() {
        var admin = "";
        var regular = "checked";
        if (this.state.editData.role == "admin") {
            admin = "checked";
            regular = "";
        }

        return(
          <div className="app">
            <a className="action-icon" onClick={this.listMode} >X</a>
                <div className="heading">
                    <h1>Edit team member</h1>
                    <h2>Edit the member information below.</h2>
                </div>
                <hr className="line-style"/>
                <div className="inputArea">
                    <form className="formArea">
                        <h3>Info</h3>
                        <input type="text" id="first_name" defaultValue={this.state.editData.first_name} placeholder="First name"/>
                        <input type="text" id="last_name" defaultValue={this.state.editData.last_name} placeholder="Last name" />
                        <input type="text" id="phone" defaultValue={this.state.editData.phone_number} placeholder="Phone number" />
                        <input type="text" id="email" defaultValue={this.state.editData.email_address} placeholder="Email address" />
                        <h3>Role</h3>
                        <label className="control control--radio">Admin - Can delete members
                          <input type="radio" name="role" value="admin" defaultChecked={admin}/>
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio">Regular - Cannot delete
                          <input type="radio" name="role" value="regular" defaultChecked={regular}/>
                          <div className="control__indicator"></div>
                        </label>
                    </form> 
                </div>
                <hr className="line-style"/>
                <div className="actionButtons">
                    <input className="green" type="submit" value="Save" />
                    <input className="red" type="submit" value="Delete" onsubmit={this.delete}/>
                </div>
            <br/>
          </div>
        )
    },

    componentDidMount: function() {
        this.loadMembers();
    },

    delete: function() {
        alert("delete");
    },

    render: function() {
        if (this.state.mode == "list") {
            return this.renderList(); 
        } else if (this.state.mode == "add") {
            return this.renderAdd();
        } else if (this.state.mode == "edit") {
            return this.renderEdit();
        }
    }
    
});

ReactDOM.render(
  <Ui />,
  document.getElementById('container')
);
