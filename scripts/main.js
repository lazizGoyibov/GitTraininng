let someAnswer = document.querySelector(".answer");
let plusBtn = document.querySelector(".btn");
let minusBtn = document.querySelector(".btn2");



function adder() {
    let someNumb = parseInt(someAnswer.innerHTML);

    return someNumb = someNumb + 1
}

function adderMinus() {
    let someNumb = parseInt(someAnswer.innerHTML);
    someNumb = someNumb - 1

    if(someNumb < 0) {
        return someNumb = 0
    } else {
       return someNumb--
    }


     
}



minusBtn.addEventListener('click', function () {
    
    someAnswer.textContent = adderMinus()
})




plusBtn.addEventListener('click', function () {
    someAnswer.textContent = adder()

})








