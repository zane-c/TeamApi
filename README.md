# Team Member Api

This project implements a team member management HTTP REST API built in Django using the Django Rest Framework and MySQL databases

[Backend](#backend) | 
[Frontend](#frontend)


## Dependencies
* Python 3.x
* Django
* MySQL
* mysqlclient (python lib adding MySql support to django)
* Django Rest Framework (Makes creating Rest Api a breeze)
* React (And React dependences babel, webpack, etc)

# Backend
## Supported Functionality

A member in the database conforms to this model:
* id (unique)
* First name
* Last name
* Email
* Phone
* Role (can either be 'regular' or 'admin' ONLY)

### Listing all members in database

Listing a member can be done with the following request:

    GET http://127.0.0.1:8000/members/
    
Will return `200: OK` and a json response (example):

    [
    {
      "id": 1,
      "first_name": "Richard",
      "last_name": "Hendriks",
      "email_address": "rh@hooli.com",
      "phone_number": "805-252-5918",
      "role": "admin"
    },
    {
      "id": 2,
      "first_name": "Erlich",
      "last_name": "Bachmann",
      "email_address": "eb@gmail.com",
      "phone_number": "123-456-7890",
      "role": "regular"
    },
    ...
    
### Listing a single member by id

A single member from the db can be retreived with:

    GET http://127.0.0.1:8000/members/9/

Response `200: OK` and will return a single object:

    {
    "id": 9,
    "first_name": "big",
    "last_name": "head",
    "email_address": "beghetti@gmail.com",
    "phone_number": "808-123-9876",
    "role": "regular"
    }
    
or `404` and empty if no content exists for that id:
    
### Adding a team member

Adding a team member can be done with:

    POST http://127.0.0.1:8000/members/
    
and adding json to the body of the request:

    {"first_name":"Gavin","last_name":"Belson","email_address":"gb@hooli.com","phone_number":"805-252-1111","role":"regular"}
    
http reponse `201: Created` with the created object will be returned.
    
### Editing a team member

Changing a team members data can be done with the following request:
    
    PATCH http://127.0.0.1:8000/members/9/
    
Adding a json object to the body:
   
    {"role": "admin"}

Http reponse `200: OK` and json object:
 
    {
    "id": 9,
    "first_name": "big",
    "last_name": "head",
    "email_address": "beghetti@gmail.com",
    "phone_number": "808-123-9876",
    "role": "admin"
    }

### Deleting an object

Deleting by member id:
  
    DELETE http://127.0.0.1:8000/members/20/
 
Reponse `202: Accepted`

------------

### Notes on CSRF

`403: Forbidden` will be returned if atempts to access data cross-site
see [TeamMemberApi\members\views.py](https://github.com/zane-c/TeamApi/blob/development/TeamMemberApi/members/views.py) for more information

# Frontend

The frontend user interface can be found at `http://127.0.0.1:8000`

The empty api...<br />
<img src="http://bitbyte.site/hash/images/test1.png" alt="Drawing" width="500">

Adding a member...<br />
<img src="http://bitbyte.site/hash/images/test2.png" alt="Drawing" width="500">

Populating field with data...<br />
<img src="http://bitbyte.site/hash/images/test3.png" alt="Drawing" width="500">

Updates listing view...<br />
<img src="http://bitbyte.site/hash/images/test4.png" alt="Drawing" width="500">

Adding some friends...<br />
<img src="http://bitbyte.site/hash/images/test5.png" alt="Drawing" width="500">

Editing a member...<br />
<img src="http://bitbyte.site/hash/images/test6.png" alt="Drawing" width="500">

Making cooler friends...<br />
<img src="http://bitbyte.site/hash/images/test7.png" alt="Drawing" width="500">

Returns to listing view with updated data...<br />
<img src="http://bitbyte.site/hash/images/test8.png" alt="Drawing" width="500">

But we probably don't have much in common... so delete...<br />
<img src="http://bitbyte.site/hash/images/test9.png" alt="Drawing" width="500">

Returning to list view...<br />
<img src="http://bitbyte.site/hash/images/test10.png" alt="Drawing" width="500">

