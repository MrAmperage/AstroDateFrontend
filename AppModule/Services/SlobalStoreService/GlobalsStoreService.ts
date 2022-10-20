import { MenuItem } from './GlobalStoreServiceTypes';

export class GlobalStore {
  private ApplicationMenu: MenuItem[] = [
    { Id: 'Users', Caption: 'Пользователи' },
    { Id: 'Roles', Caption: 'Роли пользователей' },
  ];
  get getApplicationMenu() {
    return this.ApplicationMenu;
  }
}
