// initially everything is zero
// ********** VARS **********
// as the user inputs numbers its added here
var calcArr1 = [];
var calcArr2 = [];
//actual nums / opertors for problem saved
var operatorArray = [];
// clears the display
var display = document.querySelector('#display');

// ********** PRESS **********
function press(button){
    // operatorArray empty, add to val calcArr1
    if(operatorArray.length === 0){
        //keeps adding numbers to the end till we hit an operator
        calcArr1 += button;
        //what shows up visually on the screen
        display.innerText = calcArr1;
    }else{
        //else add to calcArr2
        //add numbers on the end till we hit the equals button
        calcArr2 += button;
        //what shows up visually on the screen
        display.innerText = `${calcArr1}${operatorArray[1]}${calcArr2} = `;
    }
    
}

// ********** SETOP - operation **********
function setOP(opt){
    //checks the first numbers placement as well as length to make sure its set
    //only set one opt value at a time
    if(calcArr1.length > 0 && operatorArray.length < 1){
        //pushes calcArr1 to operation array
        operatorArray.splice(0,1,calcArr1);
        //pushes in the operator at the right place
        operatorArray.splice(1,1,opt);
        display.innerText += opt;
    }
}

// ********** CALCULATES **********
function calculate(){
    if(calcArr2.length > 0){
        operatorArray.splice(2,1,calcArr2);

    var operationClacA = eval(parseFloat(operatorArray[0]) + operatorArray[1]+parseFloat(operatorArray[2]));
    
    // rounds to 2 deciamls with toFixed
    var operationClac = operationClacA.toFixed(2);

    document.querySelector('#display').innerHTML = "";
    document.querySelector('#display').innerHTML = `${operatorArray[0]}${operatorArray[1]}${operatorArray[2]} = <span> ${operationClac} </span>`;

    // sets calcArr1 (which is always in the 0 position) to our total, then it clears eveything else. Length should be no longer than 3 at any given time
    calcArr1 = [];
    calcArr2 = [];
    operatorArray = [];
    calcArr1.splice(0,1,operationClac);

    }else{
        // if there isn't a second value in the calcArr2[2] placement - don't do anything
        return;
    }    
}

// ********** CLEARS **********
function clr(){
    document.querySelector("#display").innerHTML = "";
    
    calcArr1 = [];
    calcArr2 = [];
    operatorArray = [];
}
