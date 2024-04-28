function ganjilOrGenap(number) {
    if(isNaN(number)){
        return 'Invalid Data';
    }
    else{
        if(number%2 == 0){
            return 'Genap';
        }
        else{
            return 'Ganjil';
        }
    }
};

console.log('2 termasuk ', ganjilOrGenap(2));
console.log('3 termasuk ', ganjilOrGenap(3));
console.log('20 termasuk ', ganjilOrGenap(20));
console.log('21 termasuk ', ganjilOrGenap(21));