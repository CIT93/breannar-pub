# CFP Form and Rendering Understanding

Inside of our main.js file is where we start our form.

We've added an event listener for when submitted the form and thats where our code starts. We first start by grabbing and assigning values from our form where the user has entered into the form fields. We then pass that to our start function which calls our cfp.js. We've broken out our cfp.js to calculate and return our cfp points for the house size and how many people live in the household. This then comes back to our start function after calculations and we push these values to our cfp array that will update each time someone fils out the form.

Once our start function is completed, it will move down to our render.js file where we build out and display the table. Inside our render.js we start by assigning our output which we call TBL to a already constructed div with id tab-data. This is the div we will append the entire table to. We then break our render.js out into 2 functions, 1 function to generate our table headings and the other to render our table body.

Inside of our heading's function we hardcode an array with the values we want as our heading. We then itterate through that array for each value inside of it. We create a table heading cell for each one and assign the text to the each cell. We then end the function returning the table which we had called initially inside of our main renderTbl function.

Now that we have the table headings created we want to create the body and append it appropriately. We use the same foreach method for creating our rows and table body cells. However, we are using the cfpData that was passed through our main.js file. This allows us to use the values from the data array from our users input and display them. We create 2 table cells one for total and the other for the users name and assign them appropriately. We then append the table elements respectively to display the output.

I think your explanation helps a lot especially for students that may be getting overwhelmed with combining a lot of our concepts over the past week. Personally I have a decent understanding of how this code functions and going through your walk through helps me utilize breakpoints more. Which solves a lot of debugging than just having to console.log every little place. Instead it allows me to understand what is being done inside functions we create and follow each step accordingly.
