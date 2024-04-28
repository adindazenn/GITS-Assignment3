function urutHuruf(text){
    var textArray = text.split("");
    for(let i=0; i<text.length-1; i++){
        for(let j=i+1; j<text.length; j++){
            if(textArray[i]>textArray[j]){
                var temp = textArray[i];
                textArray[i] = textArray[j];
                textArray[j] = temp;
            }
        }
    }
    return textArray.join("");
}

console.log(urutHuruf('halo'))
console.log(urutHuruf('qwerty'))
console.log(urutHuruf('qwertyuiopasdfghjklzxcvbnm'))