import { exit } from "process";
import prompt from "prompt-sync";
import Personagem from "./Personagem";

var person: Personagem = new Personagem("Jon Snow", 90, 100, 87, 80);

var input = prompt();
var option: number = 0;

while (option != 6) {
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
            person.showStatus();
            break;
        }
        case 2: {
            person.trainDefense();
            person.showStatus();
            break;
        }
        case 3: {
            person.rest();
            person.showStatus();
            break;
        }
        case 4: {
            person.goIntoBattle();
            person.showStatus();
            break;
        }
        case 5: {
            person.showStatus();
            break;
        }
        default: {
            exit();
        }
    }
}