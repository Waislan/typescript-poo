export default class thisagem {
  constructor(
    private _name: string,
    private _energia: number,
    private _vida: number,
    private _ataque: number,
    private _defesa: number
  ) { }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get energia(): number {
    return this._energia;
  }

  public set energia(energia: number) {
    this._energia = energia;
  }

  public get vida(): number {
    return this._vida;
  }

  public set vida(vida: number) {
    this._vida = vida;
  }

  public get ataque(): number {
    return this._ataque;
  }

  public set ataque(ataque: number) {
    this._ataque = ataque;
  }

  public get defesa(): number {
    return this._defesa;
  }

  public set defesa(defesa: number) {
    this._defesa = defesa;
  }

  public showStatus(): string {
    return "\nName: " + this._name +
    "\nAtaque: " + this._ataque.toFixed(1) +
    "\nDefesa: " + this._defesa.toFixed(1) +
    "\nEnergia: " + this._energia.toFixed(1) +
    "\nVida: " + this._vida.toFixed(1) + "\n";
  }

  public trainAttack(): void {
    this._ataque += this.randomize(7);
    this._energia -= this.randomize(10);

    if (this.isAlive()) {
      if (this._ataque > 100) {
        this._ataque = 100;
      }
    }
  }

  public trainDefense(): void {
    this._defesa += this.randomize(5);
    this._energia -= this.randomize(10);

    if (this.isAlive()) {
      if (this._defesa > 100) {
        this._defesa = 100;
      }
    }
  }

  public rest(time: number): number {
    let rest: number = time * this.randomize(10);
    this._energia += rest;

    if (this._energia > 100) {
      this._energia = 100;
    }
    return rest;
  }

  public goIntoBattle(): number {
    let wear: number = this.randomize(100);
    this._energia -= wear;
    return wear;
  }

  public isAlive(): boolean {
    return this._energia > 0 && this._vida > 0;
  }

  private randomize(factor: number): number {
    return Math.random() * factor;
  }
}
