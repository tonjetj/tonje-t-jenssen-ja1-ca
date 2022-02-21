# tonje-t-jenssen-ja1-ca
Course Assignment

Find an API:

* Search for a public, free-to-use API
* Make two calls to this API:
1) to fetch an array of results
2) to fetch a single result using an id, name, or other property

Styling: 

* The focus in this CA is JavaScript and not styling,
   however, you need to produve user-interfaces that make
   sense and are easy to follow. 

* you must provide navigation to and from the home page and the contat page
* Both API calls should include a loading indicator. 

Index.html:

* Make a call to your API URL.
* Loop through the results and create HTML for each result. 
* You must display at least 3 different properties inside the HTML.
* You'll need to link each result to a details.html page and 
  to pass a parameter in the query string to that page. 
* Catch any errors and display a message on the page if an error occurs. 

Details.html:

* You'll need a parameter in the query string on this page,
  either click through to it from the index page or manually add a parameter to the URL
* Retrieve the id, name or other parameter from the query stirng
* Once you have the parameter, add it to the API URL in the format the API requires
* Make an API call using the URL you create
* Display at least 3 different properties from the receives JSON on this page
* Set the title of the HTML page to be one of the property values, like name, title or another relevant property.
* catch any errors and display a message on the page if an error occurs. 

Contact.html:

* create a form with the following inputs and validation rules.
  * name - required
  * subject - must have a value with a minimum length of 10
  * Email - must have a value and be formatted like an email address. 
  * address - must have a value with a minimum length of 25. 
* When the form on this page is submitted, write code to validate the input. If any of the inputs fail validation display an error message for the relevant input. If validation passes, add a message above the form indicating the form passed validation. 

