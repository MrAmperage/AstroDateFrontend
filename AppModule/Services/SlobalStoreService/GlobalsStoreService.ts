export class GlobalStore {
  private ApplicationMenu: string[] = [
    'Пункт меню1',
    'Пункт меню2',
    'Пункт меню3',
  ];
  get getApplicationMenu() {
    return this.ApplicationMenu;
  }
}
