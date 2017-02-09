export class User {
  username: string;
  password: number;

  constructor(obj: any) {
    this.username  = obj && obj.email         || null;
    this.password  = obj && obj.password      || null;
  }
}
