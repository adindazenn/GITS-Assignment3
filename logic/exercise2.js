function reverseString(text){
    let reversed = '';
    for(let i=text.length-1; i>=0; i--){
        reversed += text[i];
    }
    return reversed;
}

console.log(reverseString('Hello World and Coders'));
console.log(reverseString('John Doe'));
console.log(reverseString('I am a bookworm'));
console.log(reverseString('Coding is my hobby'));
console.log(reverseString('Super'));