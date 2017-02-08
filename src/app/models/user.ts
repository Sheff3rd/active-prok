export class User {
  id: number;
  email: string;
  password: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(obj: any) {
    this.id        = obj && obj.id            || null;
    this.email     = obj && obj.email         || null;
    this.password  = obj && obj.password      || null;
    this.createdAt = obj && obj.created_at    || null;
    this.updatedAt = obj && obj.updated_at    || null;
  }
}
