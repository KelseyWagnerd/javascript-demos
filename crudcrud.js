// API's //
/* API = appilcation programming interface
Architecture for communicating with software over the web.

REST API = Representational State Transfer API.
Set of rules that sends data via JSON (Javascript object notation). 

Typical API request might look like:
1) URL https://api/resources
2) Request types: POST
3) Data (written in JSON): {'data': 'value'}

Types of API request:
Get request: retrieves data (social media profile search)
Post request: Adds/submits data (making a post on your social media)
Put request: updates/adjusts data (changing your username)
Delete reqest: Deletes data (deactivating social media acct)



Things needed to call on an API:
1) request string
2) request method
3) request data
*/

/* CrudCrud.com
Remember CRUD: Create (post), Read (get), Update (put), and Delete (delete)!
We are adding data to the database online

We can append new resources to the end of this url
https://crudcrud.com/api/e0bf17a8eaba4488a6f2e45962c0dd40/<resource>
https://crudcrud.com/api/e0bf17a8eaba4488a6f2e45962c0dd40/unicorns

The Fetch function lets us make API calls
fetch(urlString, data);
*/

const apiKey = "e0bf17a8eaba4488a6f2e45962c0dd40";
const resource = "unicorns";
const requestURL = `https://crudcrud.com/api/${apiKey}/${resource}`;

// The body is what we want to add to the database
const body = {
  name: "Sprinkle Surprise",
  color: "pink",
  age: "4",
};

const data = {
  // Current CRUD method. Get, post, put, or delete.
  method: "POST",
  headers: {
    // Type of data we are expecting
    Accept: "application/json",
    // Type of data we send
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
};

// This will come back as a ReadString/ReadableString (data broken up into chunks to make it more readable)
fetch(requestURL, data)
  .then((d) => {
    d.json().then((data) => {
      debugger;
      console.log(data);
    });
  })
  .catch((err) => console.log(err));
