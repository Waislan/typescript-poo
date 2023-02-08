export default class thisagem {
  constructor(
    private name: string,
    private energia: number,
    private vida: number,
    private ataque: number,
    private defesa: number
  ) { }

  public showStatus(): string {
    return "\nName: " + this.name +
    "\nAtaque: " + this.ataque.toFixed(1) +
    "\nDefesa: " + this.defesa.toFixed(1) +
    "\nEnergia: " + this.energia.toFixed(1) +
    "\nVida: " + this.vida.toFixed(1) + "\n";
  }

  public trainAttack(): void {
    this.ataque += this.randomize(7);
    this.energia -= this.randomize(10);

    if (this.isAlive()) {
      if (this.ataque > 100) {
        this.ataque = 100;
      }
    }
  }

  public trainDefense(): void {
    this.defesa += this.randomize(5);
    this.energia -= this.randomize(10);

    if (this.isAlive()) {
      if (this.defesa > 100) {
        this.defesa = 100;
      }
    }
  }

  public rest(time: number): number {
    let rest: number = time * this.randomize(10);
    this.energia += rest;

    if (this.energia > 100) {
      this.energia = 100;
    }
    return rest;
  }

  public goIntoBattle(): number {
    let wear: number = this.randomize(100);
    this.energia -= wear;
    return wear;
  }

  public isAlive(): boolean {
    return this.energia > 0 && this.vida > 0;
  }

  private randomize(factor: number): number {
    return Math.random() * factor;
  }
}
