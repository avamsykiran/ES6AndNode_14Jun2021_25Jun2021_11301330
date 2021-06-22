https://github.com/avamsykiran/ES6AndNode_14Jun2021_25Jun2021_11301330.git

Lab Setup
--------------
    NodeJs      Dev Platform  https://nodejs.org/en/

                node --version

    VS Code     IDE, or any other text editor like notepad/notepad++...etc

    chrome      browser

Node or NodeJS?
------------------------------------
        is a javascript (ES6) runtime environemnt.

        node script.js      //executes script.js on the underlying OS.

Javascript (ECMA Script 6)
--------------------------------------

    is a scripting language, 
        capable of creating a script executable both on server and as on client.


    > it follows top-bottom execution pattern.
    > it is case-sensitive.
    > it uses C,C++ syntax.
    > it is not a typed language.

    Template Literals:

            "Hello " + userNAme + " your id is " + userId
            'Hello ' + userNAme + ' your id is ' + userId
            `Hello ${userName} your id is ${userId}`

    Multi-line Strings

            "a lengther string can not be broken"

            `a lengther string can 
            be broken`

    JSON notation

            a json notation is a way of writing objects.
            Javascript Object Notation

            obj1 = {propet:value,property2:value,property3:value...etc.,}

    Functions

            is also an object, and hence
                a function can be assigned to a variable
                a function can be passed as an arguemtn to another 
                a function can return another function.

            ref script002.js

    Variable Scopes
    --------------------

        const
        let
        var

        ref script003.js

    Anonymous Functions
    --------------------
        a function without a name is called an anonymous function.

        an anonymous function must be either Executed Immediately using 
        IIFE - Imdtly Invoked Fucntion Expression.

                (function(){
                    console.log("hello");
                })();

        or else be assigend to a constant varaible to be called elsewhere.
            
            const f1 = function(){
                console.log("hello");
            }

            f1();

    Arrow Functions
    --------------------

        ref script004.js

    Arrays
    ---------------------

        new Array();
        [];

        .push
        .pop
        .splice
        .sort

        .concate
        .map
        .reduce
        .forEach
        .filter

         ref script006.js

    spread operator & rest operator
    -------------------------------
        ... is used to convert an array into a comma seperated list of items
        ... is used to convert an assosiative array (object) into a comma seperated list of key:value pairs

        ... is called rest operator when used with args in a function, allowing the function to 
                accept any number of comma seperted values.


       ref script007.js

    collasce operator ??
    ----------------------------

        used to take an alternate value in case of null.

        ref script007.js

    String, Math and Date classes
    -----------------------------


    Constructor Functions and Classes and Inheretence (ES6)
    --------------------------------------------------------

        ref script008.js

    Prototypes
    --------------------------------------------------------

        a prototype is an implict proeprty that
        every javascript object has and is by default null,
        but can be used to extend the capabilities(features) of an
        object.

        ref script009.js

    Call and Apply 
    --------------------------------------------------------

        call and apply are two functions of every javascript function.

        and these function will allow us to invoke a resuable function on a varaity of resources.

        ref script010.js

    Asynchronous Programming
    --------------------------------------------------------

        setTimeout                ref script011.js

        setInterval               ref script012.js

        clearTimeout            will cancel the timeout

        clearInterval           will cancel the interval
                                ref script013.js

        Promise
                    is a class whose constructor takes
                    a function having two parameters:
                        called resolve and reject.

                        the resolve is used to signal the successful completion of a the job

                        the reject is used to signal errorsome completion
                        of the job.

                let job = function(resolve,reject){
                    //do what ever you wnat,
                    //but call resolve() once successfully done
                    //or call reject if an error occurs.
                }

                let p = new Promise(job);

                When will the job run???

                    p.then(function1,function2); //here the job runs

                    function1 is executed if the job completes successfully
                    function2 is executed if the job encounters an error.

                ref script014.js to   ref script016.js

        async

            the async keyword is used to make any normal function to be
            an asynchronous function and return a promise object.

              ref script017.js

        await

            the await keywrd is used only inside an async function,
            on a Promise object .
            it lets the async function wait until the all internal
            asynchonous operatiosn to complete.

             ref script018.js

    Generator Functions
    --------------------------------------------------------

            These are special type of fuctions capable of returning
            multiple values midway of execution.

            function *funName(){
                //10 line of code
                yeild v1;
                //20 lines of code
                yeild v2;
                //5 line of code
                return finalVal;
            }

             ref script019.js
                                                                    
ClientSideJs
-----------------------------------------------------------------------------------------

    BOM - Browser Object Model
    -----------------------------

        window is a global object representing a browser and all of its methods and properties
        can be accessed with or without prefixing 'window.'

        window.alert("sometext");
        window.confirm("sometext");
        window.prompt("sometext","defaultText");

        window.document
        window.innerHeight      the inner height of the browser window (in pixels)
        window.innerWidth       the inner width of the browser window (in pixels)
        window.open()           open a new window
        window.close()          close the current window
        window.moveTo()         move the current window
        window.resizeTo()       resize the current window

        window.screen.width
        window.screen.height
        window.screen.availWidth
        window.screen.availHeight
        window.screen.colorDepth
        window.screen.pixelDepth

        window.location.href        returns the href (URL) of the current page
        window.location.hostname    returns the domain name of the web host
        window.location.pathname    returns the path and filename of the current page
        window.location.protocol    returns the web protocol used (http: or https:)
        window.location.assign(url)    loads a new page

        window.history.back()       same as clicking back in the browser
        window.history.forward()    same as clicking forward in the browser
        window.history.go()         Loads a specific URL from the history list

    DOM Manipulation
    -------------------------
        
        document.getElementById(id)	            Find an element by element id
        document.getElementsByTagName(name)	    Find all elements by tag name
        document.getElementsByClassName(name)	Find all elements by class name
        document.querySelector("selector")      Find an element by css selector
        document.querySelectorAll("selector")   Find all elements by css selector
        
        element.innerHTML =  new html content	Change the inner HTML of an element
        element.attribute = new value	        Change the attribute value of an HTML element
        element.style.property = new style	    Change the style of an HTML element

        element.parentNode                      Access the parent element of an element
        element.childNodes[nodenumber]          Access the specific child element of an element
        element.firstChild                      Access the first child element of an element
        element.lastChild                       Access the last child element of an element
        element.nextSibling                     Access the next sibling element of an element
        element.previousSibling                 Access the prev sibling element of an element
        
        element.setAttribute(attribute, value)	Change the attribute value of an HTML element
        
        document.createElement(element)	        Create an HTML element
        document.removeChild(element)	        Remove an HTML element
        document.appendChild(element)	        Add an HTML element
        document.replaceChild(new, old)	        Replace an HTML element
        document.write(text)	                Write into the HTML output stream

        element.appendChild(childEle)
        element.removeChild(childEle)
        element.replaceChild(newChildEle, oldChildEle)
        element.remove()

        Two Ways Adding event handler code to an onclick event
            element.onclick = function(){code}	    
            element.addEventListener("click",function(){code})

NodeJs
-----------------------------------------------------------------------------------------

    Node JS is a javascript execution environment.

    And is used to create, execute and manage javascript projects.

        node        is the javascript executor 
        npm         node package manager
                    package refers to any javascirpt project.

                    npm init -y
                      this create a new proejct in the current folder

                    npm install -g package-name
                        this command install a thid party javascript package 
                        in the folder 'c:\users\your-user-name\.npm'

                    npm install package-name --save
                        this cocommand install a thid party javascript package 
                        in the './node_modules' folder and makes 
                        an entry in package.json
                    
                    npm uninstall package-name
                        to uninstall any installed packages.

                    npm install
                        is going to install all packages
                        listed in package.json file 

                    npm start       indicate startign the execution of a node project
                                     run the command marked as 'start' in package.json
                    
                    npm test        indicate startign the testing of a node project
                                     run the command marked as 'test' in package.json

                    npm run cmdName is used to run custom life cycle commands
                                    created in package.json
                
        npx         used to execute a ajvascript tool
                    without downlaoding it into our drives (disks).

                    npx package-name

        Node JS Libraries
        ----------------------------------------
        requireJS
                    it is sued to export resources
                    from one js file and use them in another.

                    file1.js
                    ---------------
                        const f1 =() =>"Hello";
                        export.f2 = () => "Hai";

                    file2.js
                    ---------------
                        let x = require("file1")        
                        x.f2();
                        //f1 can not be accessed here.

        fs          stands for file system
                    this fs library offers functions
                    to read and write data into files.
                    both synchronously and asynchronously.

                    
        