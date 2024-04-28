function isPrime(number){
    if(number<2){
        return false;
    }
    else{
        for(let i=2; i<=Math.sqrt(number); i++){
            if(number%i==0){
                return false;
            }
        }
    }
    return true;
}

function listPrima(firstNumber, secondNumber){
    let arrayPrima = [];
    for(let i=firstNumber; i<=secondNumber; i++){
        if(isPrime(i)){
            arrayPrima.push(i);
        }
    }
    return arrayPrima;
}

console.log(listPrima(1,5));
console.log(listPrima(5,10));
console.log(listPrima(10,20));