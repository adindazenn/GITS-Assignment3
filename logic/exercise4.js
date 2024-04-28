function isArethmaticProgression(number){
    let beda = number[1]-number[0];
    for(let i=2; i<=number.length-2; i++){
        if(number[i+1]-number[i]!==beda){
            return false;
        }
    }
    return true;
}

console.log(isArethmaticProgression([1,2,3,4,5]))
console.log(isArethmaticProgression([2,4,6,12,24]))
console.log(isArethmaticProgression([2,4,6,8]))
console.log(isArethmaticProgression([2,6,18,54]))
console.log(isArethmaticProgression([1,2,3,4,7,9]))