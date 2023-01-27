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
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;

            if (person.energia < 0) {
                console.log("Game over!");
            } else {
                if (person.ataque > 100) {
                    person.ataque = 100;
                }
                console.log("\n");
                console.log("Name: ", person.name);
                console.log("Ataque: ", person.ataque.toFixed(1));
                console.log("Defesa: ", person.defesa.toFixed(1));
                console.log("Energia: ", person.energia.toFixed(1));
                console.log("Vida: ", person.vida.toFixed(1));
                console.log("\n");
            }

            break;
        }
        case 2: {
            person.defesa += Math.random() * 5;
            person.energia -= Math.random() * 10;

            if (person.energia < 0) {
                console.log("Game over!");
            } else {
                if (person.defesa > 100) {
                    person.defesa = 100;
                }
                console.log("\n");
                console.log("Name: ", person.name);
                console.log("Ataque: ", person.ataque.toFixed(1));
                console.log("Defesa: ", person.defesa.toFixed(1));
                console.log("Energia: ", person.energia.toFixed(1));
                console.log("Vida: ", person.vida.toFixed(1));
                console.log("\n");
            }

            break;
        }
        case 3: {
            person.energia += Math.random() * 10;

            if (person.energia > 100) {
                person.energia = 100;
            } else {
                console.log("\n");
                console.log("Name: ", person.name);
                console.log("Ataque: ", person.ataque.toFixed(1));
                console.log("Defesa: ", person.defesa.toFixed(1));
                console.log("Energia: ", person.energia.toFixed(1));
                console.log("Vida: ", person.vida.toFixed(1));
                console.log("\n");
            }

            break;
        }
        case 4: {
            person.energia -= Math.random() * 100;

            if (person.energia < 0) {
                console.log("Game over!");
            } else {
                console.log("\n");
                console.log("Name: ", person.name);
                console.log("Ataque: ", person.ataque.toFixed(1));
                console.log("Defesa: ", person.defesa.toFixed(1));
                console.log("Energia: ", person.energia.toFixed(1));
                console.log("Vida: ", person.vida.toFixed(1));
                console.log("\n");
            }

            break;
        }
        case 5: {
            console.log("\n");
            console.log("Name: ", person.name);
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Vida: ", person.vida.toFixed(1));
            console.log("\n");

            break;
        }
        default: {
            break;
        }
    }
}