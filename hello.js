const sayHello = function (name){ 
  console.log("Hello, " + name);
}

sayHello("Caliban"); 
sayHello("Miranda"); 
sayHello("Ferdinand");

const returnSayHello = function (name){
    return "Hello, " + name;
}

const greetings = returnSayHello("John");

console.log(greetings);