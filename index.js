console.log("the console work !")

let nameInput = document.querySelector(".cardholder-name")
let numberInput = document.querySelector(".card-number-input")
let mmInput = document.querySelector(".MM")
let yyInput = document.querySelector(".YY")
let digitInput = document.querySelector(".digit")
let btn = document.querySelector(".btn")
let errorNumber = document.querySelector(".error-number")
let errorMY = document.querySelector(".error-MY")
let errorDigit = document.querySelector(".error-digit")

let nameOnCard = document.querySelector(".card-name")
let numberOnCard = document.querySelector(".card-number")
let mmOnCard = document.querySelector(".mm")
let yyOnCard = document.querySelector(".yy")
let digitOnCard = document.querySelector(".digit-card")



nameInput.addEventListener("input", function(e){
    nameOnCard.textContent = e.target.value;
})

numberInput.addEventListener("input", function(e){
    numberOnCard.textContent = e.target.value;
})

mmInput.addEventListener("input", function(e){
    mmOnCard.textContent = e.target.value;
})

yyInput.addEventListener("input", function(e){
    yyOnCard.textContent = e.target.value;
})

digitInput.addEventListener("input", function(e){
    digitOnCard.textContent = e.target.value;
})



// errors

// number errors
numberInput.addEventListener("input", function(){
    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
    if (numberOnCard.innerHTML === ""){
        errorNumber.innerHTML = "cant be blank"
    }else if (containsOnlyNumbers(numberOnCard.innerHTML) === false) {
        errorNumber.innerHTML = "Only numbers allowed"
    }else if (containsOnlyNumbers(numberOnCard.innerHTML)){
        errorNumber.innerHTML = ""
    }
})

//mm errors

mmInput.addEventListener("input", function(){

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
    if (mmOnCard.innerHTML === ""){
        errorMY.innerHTML = "cant be blank"
    }else if (containsOnlyNumbers(mmOnCard.innerHTML) === false) {
        errorMY.innerHTML = "Only numbers allowed"
    }else if (containsOnlyNumbers(mmOnCard.innerHTML)){
        errorMY.innerHTML = ""
    }
})


//yy errors
yyInput.addEventListener("input", function(){

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
    if (yyOnCard.innerHTML === ""){
        errorMY.innerHTML = "cant be blank"
    }else if (containsOnlyNumbers(yyOnCard.innerHTML) === false) {
        errorMY.innerHTML = "Only numbers allowed"
    }else if (containsOnlyNumbers(yyOnCard.innerHTML)){
        errorMY.innerHTML = ""
    }
})

//digit errors
digitInput.addEventListener("input", function(){

    function containsOnlyNumbers(str) {
        return /^\d+$/.test(str);
    }
    if (digitOnCard.innerHTML === ""){
        errorDigit.innerHTML = "cant be blank"
    }else if (containsOnlyNumbers(digitOnCard.innerHTML) === false) {
        errorDigit.innerHTML = "Only numbers allowed"
    }else if (containsOnlyNumbers(digitOnCard.innerHTML)){
        errorDigit.innerHTML = ""
    }
})


btn.addEventListener("click",function(){
    if (errorNumber.innerHTML === "" && errorMY.innerHTML === "" && errorDigit.innerHTML === ""){
        if (yyOnCard.innerHTML.length != 2 || mmOnCard.innerHTML.length != 2){
            alert("MM or YY are not valid")
        }
        else{
            if (digitOnCard.innerHTML.length != 3){
                alert("3-numbers not valid")
            }else{
                if (numberOnCard.innerHTML.length !=  16){
                    alert("Number is not valid")
                }else{
                    if (nameOnCard.innerHTML.length === 0 || nameOnCard.innerHTML === 'Jane Appleseed')
                    alert("You need to fill the name")
                    else{
                        document.querySelector(".hiden").remove()
                        document.querySelector(".confirm-div").classList.remove("confirm-div")
                    }
                }
            }
        }
    }
})

