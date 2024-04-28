function printDate() {
    const date = new Date();
    console.log("Date:", date.toDateString());
  };
  
  function date() {
    return new Date().toDateString();
  };
  
printDate();
console.log("Date:", date());