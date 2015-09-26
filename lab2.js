//Name:Marco A. Duarte
//Student #: 100006379
//Date: September 24, 2015

//Lab Requirements:
//- Accept 3 QueryString parameters: method, x, and y
//- Possible values for the method parameter are: "add", "subtract", "multiply", and "divide"
//- If the method value is anything else, show an error message
//- Determine which math operation to run based on the value of the method parameter
//- Perform this math operation on the other 2 values (x and y)
//- Display the full math operation and its result on the page in this format: x [method] y = [result]


// require http so we can run in the browser
var http  = require('http');

// require url library to parse a querstring value
var url = require('url');

// start the server
http.createServer(function (req, res) 
{
    res.writeHead(200, { 'Content-Type': 'text-plain' }); 
    
    // create a url querystring
    var qs = url.parse(req.url, true).query;
    
    //create qs parameters method, x, y
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);
    
    var method = qs.method;
    
    //create a variable to hold the total value
    var total;
    
    //create the conditions for the math operators 
    if(method === "add")
    {
        total = x + y;
        method = " + ";
    }
    else if(method === "subtract")
    {
        total = x - y;
        method = " - ";
    }
    else if(method === "multiply")
    {
        total = x * y;
        method = " * ";
    }
    else if(method === "divide")
    {
        total = x / y;
        method = " / ";
    }
    else
    {
        res.write('<p>Method entered is invlaid. Pleae choose either add, subtract, multiply, or divide as a valid method value.<br /></p>');
    }
 
    // display all the values if the method input is valid
    if(method === " + " || method === " - " || method === " * " || method === " / ")
    {
        res.write('<p>Output: ' + x + method + y + ' = ' + total + '</p>');
    }
    
    res.end();
    
}).listen(3000);

//print the cmd prompt(console/terminal depending on the OS)
console.log('Server Running at http://localhost:3000');
