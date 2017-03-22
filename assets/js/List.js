import React from 'react';
import Member from './Member';
import Edit from './Edit';
import Add from './Add';

/*
 List view will be responsible for loading data
 from api, updating data, and event navigation
 to the edit view, and add view. This is the
 only object that manages 'state', it creates
 react components Edit, Add, and Member
 */
const List = React.createClass({

    /* ---- Data Management Functions -----*/

    loadMembers: function () {
        $.ajax({
            url: "http://127.0.0.1:8000/members",
            datatype: 'json',
            cache: false,
            success: function (data) {
                this.setState({data: data})
            }.bind(this)
        })
    },

    getInitialState: function () {
        return {data: [], view: "list"}
    },

    componentDidMount: function () {
        this.loadMembers();
    },


    /* ----- State Management Functions --------*/

    listState: function () {
        this.loadMembers();
        this.setState({view: "list"});
    },

    addState: function () {
        this.setState({view: "add"});
    },

    editState: function (member) {
        this.setState({view: "edit", editData: member});
    },


    /* ----- Sub-Render Functions -------- */

    renderList: function () {

        if (this.state.data) {
            const numMembers = Object.keys(this.state.data).length;
            const edit = this.editState;
            const populateMembers = this.state.data.map(function (member) {
                let role = "";
                if (member.role === "admin") {
                    role = "(Admin)";
                }
                const navToEdit = function () {
                    return edit(member);
                };
                return (<Member key={member.id} name={member.first_name + " " + member.last_name}
                                phone={member.phone_number} email={member.email_address} role={role}
                                navToEdit={navToEdit}/>)
            });
            return (
                <div className="app">
                    <a className="action-icon" onClick={this.addState}>+</a>
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

    renderAdd: function () {
        return (<Add navToList={this.listState}/>)
    },

    renderEdit: function () {
        let admin = "";
        let regular = "checked";
        if (this.state.editData.role === "admin") {
            admin = "checked";
            regular = "";
        }
        const members = this.state.editData;
        return (<Edit memberId={members.id} navToList={this.listState} fname={members.first_name}
                      lname={members.last_name} phone={members.phone_number}
                      email={members.email_address} roleAdmin={admin} roleRegular={regular}/>)
    },


    /* ----- Master Render Functions -------- */

    render: function () {
        if (this.state.view === "list") {
            return this.renderList();
        } else if (this.state.view === "add") {
            return this.renderAdd();
        } else if (this.state.view === "edit") {
            return this.renderEdit();
        }
    }

});

export default List;
