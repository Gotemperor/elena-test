REST API:

GET:
/names_endpoint
list of all names

GET:
/names_endpoint/some_id
specific name by id

POST:
/names_endpoint
params:
    {
    "name":"some name"
    }
Creates new name

PUT:
/names_endpoint/some_id
params:
    {
    "name":"some name"
    }
    
    updated existing name by id with the value of name

DELETE:
/names_endpoint/some_id

Delete name by id