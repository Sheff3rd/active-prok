export class Workspace {
  id:    number;
  title: string;

  constructor(obj: any) {
    this.id        = obj && obj.id         || null;
    this.title     = obj && obj.title      || '';
  }
}
