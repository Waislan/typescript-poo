export default class thisagem {
  constructor(
    public name: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) { }

  showStatus(): string {
    return "\nName: " + this.name +
    "\nAtaque: " + this.ataque.toFixed(1) +
    "\nDefesa: " + this.defesa.toFixed(1) +
    "\nEnergia: " + this.energia.toFixed(1) +
    "\nVida: " + this.vida.toFixed(1) + "\n";
  }

  trainAttack(): void {
    this.ataque += Math.random() * 7;
    this.energia -= Math.random() * 10;

    if (this.isAlive()) {
      if (this.ataque > 100) {
        this.ataque = 100;
      }
    }
  }

  trainDefense(): void {
    this.defesa += Math.random() * 5;
    this.energia -= Math.random() * 10;

    if (this.isAlive()) {
      if (this.defesa > 100) {
        this.defesa = 100;
      }
    }
  }

  rest(time: number): number {
    let rest: number = time * Math.random() * 10;
    this.energia += rest;

    if (this.energia > 100) {
      this.energia = 100;
    }
    return rest;
  }

  goIntoBattle(): number {
    let wear: number = Math.random() * 100;
    this.energia -= wear;
    return wear;
  }

  isAlive(): boolean {
    return this.energia > 0 && this.vida > 0;
  }
}
