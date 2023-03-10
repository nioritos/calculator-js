function deleteValue() {
    document.querySelector('h2').innerHTML = ' ';
}


function showResult() {
    var result = document.querySelector('h2').innerHTML;
    if(result) {
        document.querySelector('h2').innerHTML = eval(result);
    }
    else {
        alert('something is wrong') 
    }
}

function rapazpqp(operator) {
    var result = document.querySelector('h2').innerHTML;
    var n1 = result;
    deleteValue()
    console.log(n1)
    document.querySelector('h2').innerHTML = operator;

    switch(operator) {
        case '-':
            n1 - 1
            break
    }

}

function calc(num) {

    var result = document.querySelector('h2').innerHTML;
    document.querySelector('h2').innerHTML = result + num;
}
