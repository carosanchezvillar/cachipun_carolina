let repetitions = prompt("Ingrese la cantidad de veces que desea que se repita el juego");

let repetitionsQty = Number.parseInt(repetitions);

console.log(`el usuario quiere que el juego se repita ${repetitionsQty} veces`);

for(let count = 1; count <= repetitionsQty; count = count + 1){
//pedir una respuesta
const userMove = prompt("Ingrese su jugada, debe ser: Piedra, Papel o Tijera");
const randomMoveIndex = Math.floor(Math.random() * (4 + 1)) +1; // 1 o 2 o 3;
//let randomMoveText = "";

if (randomMoveIndex === 1){
    randomMoveIndex = "Piedra";
}else if (randomMoveIndex === 2){
    randomMoveIndex = "Papel";
}else if (randomMoveIndex === 3){
    randomMoveIndex = "Tijera";
}else {
    console.error(`La opción randomeMoveIndex no es válida: ${randomMoveIndex}`);


}

let winner = "";

if (randomMoveIndex === "Piedra"){
    if(userMove === "Papel"){
        winner = "User"
    }else if (userMove === "tijera"){
        winner = "Machine"
    }else {
        winner = "Both"
    }
}else if (randomMoveIndex === "Papel"){
    if (userMove === "Tijera"){
        winner = "User";
    }else if (userMove === "Piedra"){
        winner = "Machine";
    }else{
        winner = "Both"
    }
}else if (randomMoveIndex === "Tijera"){
    if(userMove === "Papel"){
        winner = "User"
    }
}

    console.log({randomMoveText, randomMoveIndex });

    

//mostrar el resultado
console.log({userMove, randomMoveIndex });
console.log(`El ganador es: ${winner} `);
}