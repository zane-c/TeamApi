import React from 'react'
import ReactDOM from 'react-dom'

/*
    React component that renders the 
    edit view. Also handles ajax calls
    to api for PUT and DELETE requests
*/
var Edit = React.createClass ({

    saveMember: function() {

        //check all fields are full
        if (    $('#first_name').val() == ""
             || $('#last_name').val() == ""
             || $('#email').val() == ""
             || $('#phone_name').val() == "") {

            alert("Fields cannot be left empty")
        } else {

            //exit function
            var exit = this.props.navToList

            //get admin
            var role = "regular"
            if ($('#role').is(':checked')) { 
                role = "admin" 
            }

            var file = {
                        "first_name": $('#first_name').val(),
                        "last_name": $('#last_name').val(),
                        "email_address": $('#email').val(),
                        "phone_number": $('#phone').val(),
                        "role": role
                       }

            $.ajax({
                url: "http://127.0.0.1:8000/members/" + this.props.memberId,
                type: 'PUT',                   
                contentType: 'application/json',
                dataType: 'json',
                processData: false,
                data: JSON.stringify(file),
                success: exit,
                error: function() {
                    alert('failure to edit item')
                }
            })
        }
    },

    deleteMember: function() {
        var exit = this.props.navToList
        var url = "http://127.0.0.1:8000/members/" + this.props.memberId
        $.ajax({
            url: url,
            type: 'DELETE',                   
            contentType: 'application/json',
            dataType: 'json',
            success: exit,
            error: function() {
                alert('failure to delete item')
            }
        })
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
                          <input id="role" type="radio" name="role" value="admin" defaultChecked={this.props.roleAdmin}/>
                          <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio">Regular - Cannot delete
                          <input id="role" type="radio" name="role" value="regular" defaultChecked={this.props.roleRegular}/>
                          <div className="control__indicator"></div>
                        </label>
                    </form> 
                </div>
                <hr className="line-style"/>
                <div className="actionButtons">
                    <input className="red" type="submit" value="Delete" onClick={this.deleteMember}/>
                    <input className="green" type="submit" value="Save" onClick={this.saveMember}/>   
                </div>
                <br/>
            </div>
        )
    } 
})

export default Edit
