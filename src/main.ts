import { exit } from "process";
import prompt from "prompt-sync";
import Personagem from "./Personagem";

var person: Personagem = new Personagem("Jon Snow", 90, 100, 87, 80);

var input = prompt();
var option: number = 0;

while (option != 6 || !person.isAlive()) {
    console.log("+---------- Menu ----------+");
    console.log("|1. Treinar ataque         |");
    console.log("|2. Treinar defesa         |");
    console.log("|3. Descansar              |");
    console.log("|4. Entrar em batalha      |");
    console.log("|5. Mostrar atributos      |");
    console.log("|6. Sair                   |");
    console.log("+--------------------------+");

    option = +input("Escolha uma opção: ");

    switch (option) {
        case 1: {
            person.trainAttack();
            console.log(person.showStatus());
            break;
        }
        case 2: {
            person.trainDefense();
            console.log(person.showStatus());
            break;
        }
        case 3: {
            let time: number = +input("How much time? ");
            let rest: number = person.rest(time);
            console.log(`\nThis rest yiealds ${rest} energy.\n`);
            console.log(person.showStatus());
            break;
        }
        case 4: {
            let wear: number = person.goIntoBattle();
            console.log(`\nThis battle cost ${wear} energy.\n`);
            console.log(person.showStatus());
            break;
        }
        case 5: {
            console.log(person.showStatus());
            break;
        }
        default: {
            exit();
        }
    }
}

console.log("\n----- GAME OVER -----");