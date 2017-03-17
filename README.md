# TeamMemberApi

This project implements a team member management HTTP REST API built in Django using the Django Rest Framework and MySQL databases

## Dependencies
* Python 3.x
* Django
* MySQL
* mysqlclient (python lib adding MySql support to django)
* Django Rest Framework (Makes creating Rest Api a breeze)

## Supported Functionality

A member in the database conforms to this model:
* id (unique)
* First name
* Last name
* Email
* Phone
* Role (can either be 'regular' or 'admin' ONLY)

### Listing all members in database

Adding a member can be done with the following request :

    GET http://127.0.0.1:8000/members/
    
Will return `200: OK` and a json reponse (example):

    [
    {
      "id": 1,
      "first_name": "Richard",
      "last_name": "Hendrix",
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

A single member from the db can be retreived

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

Changing a team members data can be done with the follow request:
    
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


### Testing

A generic testing page is available at `http://127.0.0.1:8000`
More info on testing files can be found here [test.js](https://github.com/zane-c/TeamApi/blob/development/TeamMemberApi/members/static/members/test.js)

![image_here](http://bitbyte.site/hash/get2.png)

    
