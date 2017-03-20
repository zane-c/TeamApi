import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Member from './Member';
import './style.css';

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
            var populateMembers = this.state.data.map(function(member) {
                var role = "";
                if (member.role == "admin") {
                    role = "(Admin)";
                }
                return <Member name={member.first_name + " " + member.last_name} phone={member.phone_number} email={member.email_address} role={role} />
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
                
            <br/>
          </div>
        )
    },

    editMode: function() {
        this.setState({mode: "edit"});
    },

    renderEdit: function() {
        return(
          <div className="app">
            <a className="action-icon" onClick={this.listMode} >X</a>
                <div className="heading">
                    <h1>Edit team member</h1>
                    <h2>Edit the member information below.</h2>
                </div>
                <hr className="line-style"/>

            <br/>
          </div>
        )
    },

    componentDidMount: function() {
        this.loadMembers();
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
