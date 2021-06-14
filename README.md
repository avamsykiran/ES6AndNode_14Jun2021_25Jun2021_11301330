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


            



