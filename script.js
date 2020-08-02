
// Onblur event
function inputValidation(inputTxt) {
    var regx = /^[0-9a-zA-Z]+$/;
    var textField = document.getElementById("textField");
    if (inputTxt.value != '') {

        if (inputTxt.value.length >= 5) {

            if (inputTxt.value.match(regx)) {
                textField.textContent = 'Valid Input';
                textField.style.color = 'green';
            }
            else {
                textField.textContent = 'Invalid input: only numbers, letters and white spaces';
                textField.style.color = 'red';
            }
        }
        else {
            textField.textContent = 'Your input should be >= 5 characters';
            textField.style.color = 'red';
        }
    }
    else {
        textField.textContent = 'Empty Input';
        textField.style.color = 'red';
    }
}




// Onclick event
function myfunction() {
    var text1 = "Hey!";
    var text2 = "Your information has been recorded successfully";
    var text3 = text1 + text2;
    document.getElementById("demo").innerHTML = text3;
}



// Onload event
function loadfunction(x) {
    alert(x + 'Page is loaded');
}