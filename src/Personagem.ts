export default class thisagem {
  constructor(
    public name: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) { }

  showStatus(): void {
    console.log("\n");
    console.log("Name: ", this.name);
    console.log("Ataque: ", this.ataque.toFixed(1));
    console.log("Defesa: ", this.defesa.toFixed(1));
    console.log("Energia: ", this.energia.toFixed(1));
    console.log("Vida: ", this.vida.toFixed(1));
    console.log("\n");
  }

  trainAttack(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;

    if (this.isAlive()) {
      if (this.ataque > 100) {
        this.ataque = 100;
      }
      this.showStatus();
    }
  }

  trainDefense(): void {
    this.defesa += Math.random() * 5;
    this.energia -= Math.random() * 10;

    if (this.isAlive()) {
      if (this.defesa > 100) {
        this.defesa = 100;
      }
      this.showStatus();
    }
  }

  rest(): void {
    this.energia += Math.random() * 10;

    if (this.energia > 100) {
      this.energia = 100;
    } else {
      this.showStatus();
    }
  }

  goIntoBattle(): void {
    this.energia -= Math.random() * 100;

    if (this.isAlive()) {
      this.showStatus();
    }
  }

  isAlive(): boolean {
    if (this.energia < 0) {
      console.log("Game over!");
      return false;
    }
    return true;
  }
}
