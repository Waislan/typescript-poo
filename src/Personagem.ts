class Personagem {
  constructor(
    public name: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
}

let tonyStark = new Personagem("Tony Stark", 90, 85, 80, 85);

console.log("personagem: ", tonyStark);
