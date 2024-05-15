//for greet class value to print one by one
var timePerLetter = 100;
var newLineCharacter = '|';
var greet = document.getElementById("greet");
function printOut(text) {

    var index = 0;

    var printNextLetter = function() {
        if (index < text.length) {
        var CHAR = text[index];

        switch(CHAR) {
            case newLineCharacter:
            greet.appendChild(document.createElement('p'));
            break;
            default:
            greet.append(CHAR);
            break;
        }

        index++;

        setTimeout(printNextLetter, timePerLetter);
        }
    }

    printNextLetter();
    }


        printOut("Hello World, I am Oselumese | A data scientist and software developer");





