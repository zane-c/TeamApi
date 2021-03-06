import React from 'react';

/*
 React component that renders the
 Add view. Also handles ajax calls
 to api for POST requests
 */
const Add = React.createClass({

    addNew: function () {

        const fname = $('#first_name').val();
        const lname = $('#last_name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        //check all fields are full
        if (fname === ""
            || lname === ""
            || email === ""
            || phone === "") {

            alert("Fields cannot be left empty");
        } else {

            //exit function
            const exit = this.props.navToList;

            //get admin
            let role = "regular";
            if ($('#role').is(':checked')) {
                role = "admin";
            }

            let file = {
                "first_name": fname,
                "last_name": lname,
                "email_address": email,
                "phone_number": phone,
                "role": role
            };

            $.ajax({
                url: 'http://127.0.0.1:8000/members/',
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json',
                processData: false,
                data: JSON.stringify(file),
                success: exit,
                error: function () {
                    alert('failure to add member');
                }
            });
        }
    },

    render: function () {
        return (
            <div className="app">
                <a className="action-icon" onClick={this.props.navToList}>x</a>
                <div className="heading">
                    <h1>Add a team member</h1>
                    <h2>Fill in team member information below.</h2>
                </div>
                <hr className="line-style"/>
                <div className="inputArea">
                    <form className="formArea">
                        <h3>Info</h3>
                        <input type="text" id="first_name" placeholder="First name"/>
                        <input type="text" id="last_name" placeholder="Last name"/>
                        <input type="text" id="phone" placeholder="Phone number"/>
                        <input type="text" id="email" placeholder="Email address"/>
                        <h3>Role</h3>
                        <label className="control control--radio">Admin - Can delete members
                            <input type="radio" id="role" name="radio" value="admin"/>
                            <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio">Regular - Cannot delete members
                            <input type="radio" id="role" name="radio" value="regular" defaultChecked/>
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

export default Add;
