import React from 'react'
import ReactDOM from 'react-dom'
import Member from './Member'
import EditState from './EditState'
import AddState from './AddState'


var ListState = React.createClass ({

    loadMembers: function() {
        $.ajax({
            url: "http://127.0.0.1:8000/members",
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data})
            }.bind(this)
        })
    },

    getInitialState: function() {
        return {data: [], mode: "list"}
    },

    componentDidMount: function() {
        this.loadMembers()
    },

    listMode: function() {
        this.loadMembers()
        this.setState({mode: "list"})
    },

    addMode: function() {
        this.setState({mode: "add"})
    },

    editMode: function(member) {
        this.setState({mode: "edit", editData: member})
    },

    renderList: function() {
        if (this.state.data) {
            var numMembers = Object.keys(this.state.data).length
            var parent = this
            var populateMembers = this.state.data.map(function(member) {
                var role = ""
                if (member.role == "admin") {
                    role = "(Admin)"
                }
                var navToEdit = function() {
                    return parent.editMode(member)
                }
                return (<Member memberId={member.id} name={member.first_name + " " + member.last_name} 
                        phone={member.phone_number} email={member.email_address} role={role} 
                        navToEdit={navToEdit} />)
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

    renderAdd: function() {
        return (<AddState navToList={this.listMode} />)
    },

    renderEdit: function() {
        var admin = ""
        var regular = "checked"
        if (this.state.editData.role == "admin") {
            admin = "checked"
            regular = ""
        }
        return(<EditState memberId={this.state.editData.id} navToList={this.listMode} fname={this.state.editData.first_name} 
                lname={this.state.editData.last_name} phone={this.state.editData.phone_number}
                email={this.state.editData.email_address} roleAdmin={admin} roleRegular={regular} />)
    },

    render: function() {
        if (this.state.mode == "list") {
            return this.renderList() 
        } else if (this.state.mode == "add") {
            return this.renderAdd()
        } else if (this.state.mode == "edit") {
            return this.renderEdit()
        }
    }
    
})

export default ListState
