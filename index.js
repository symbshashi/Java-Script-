//Make a variable
let a = 10
console.log(a)


// Create  a object with properties and values
let girl1 = {
    name: 'Sonam',
    age: 23
}
console.log(girl1)


//Getinto property of object and Change the value
let girl2 = {
    name: 'Sonam',
    age: 23
}
girl2.name = 'Nidhi'
console.log(girl2)


//Creating an array
let items1 = ['apple', 'speaker', 'chair']
console.log(items1)



//Updating an array
let items2 = ['apple', 'speaker', 'chair']
items2[3] = 'spray'
console.log(items2)

let items3 = ['apple', 'speaker', 'chair']
items3[3] = 100
console.log(items3)

//Functions in javascript !important
//Predefined Functions
//Userdefined Functions
function view(name) {
    console.log('Welcome to JAVASCRIT ' + name)
}
view('Shashikant')


//Condition
// let b = confirm("Do you want to continue")
// if(b){
//     alert("thanks")
// }else{
//     alert("sorry")
// }


//Switch case
let day = 5
switch (day) {
    case 1:
        console.log("Today is monday")
        break
    case 2:
        console.log("Today is tuesday")
        break
    case 3:
        console.log("Today is wednesday")
        break
    case 4:
        console.log("Today is thursday")
        break
    case 5:
        console.log("Today is friday")
        break
    case 6:
        console.log("Today is saturday")
        break
    case 7:
        console.log("Today is sunday")
        break
    default:
        console.log("Enter valid date")
}



//Write a JavaScript program to test whether the first character of a string is uppercase or not.
function upper_case(str) {
    regexp = /^[A-Z]/;   //  ^ this symbole match the begning of the string  
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    }
    else {
        console.log("String's first character is not uppercase");
    }
}
upper_case('Abcd');
upper_case('abcd');



//Write a JavaScript program to check a credit card number.
function credit_card(str) {
    regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if (regexp.test(str)) {
        console.log("valid credit card number");
    }
    else {
        console.log("Invalid credit card number");
    }
}
credit_card(378282246310006)
credit_card(3782822463106)



//Validation for email ID
function valid_email(str) {
    mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(str)) {
        console.log("Valid email address!");
    }
    else {
        console.log("Invalid email address!");
    }
}
valid_email('me-info@example.com');
valid_email('me-infoexample.com');


//To count the number of words in the string
function count_words() {
    str1 = document.getElementById("InputText").value;
    //exclude  start and end white-space
    str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
    //convert 2 or more spaces to 1  
    str1 = str1.replace(/[ ]{2,}/gi, " ");
    // exclude newline with a start spacing  
    str1 = str1.replace(/\n /, "\n");
    document.getElementById("noofwords").value = str1.split(' ').length;
}


//Find the number of vovels in given string
function vowel_count(str) {
    return str.match(/[aeiou]/gi).length; //g used for global to search in all string and i used for case-senstive matching
}
console.log(vowel_count('Hello my name is javascript'));



//Validate the canada zipcode
function is_caPostalCode(str) {
    regexp = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/; // \s is used for the space  to make it valid
    if (regexp.test(str)) {
        console.log("This Zip code is valid");
    }
    else {
        console.log("This Zip code is Invalid");
    }
}
is_caPostalCode('K8V3Y1');
is_caPostalCode('Z4V4X1');
