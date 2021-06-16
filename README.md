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

                ref script014.js







