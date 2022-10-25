import { BehaviorSubject } from 'rxjs';
import { MenuItem } from './GlobalStoreServiceTypes';

export class GlobalStoreService {
  private ApplicationMenu: MenuItem[] = [
    { Id: 'Users', Caption: 'Пользователи' },
    { Id: 'Roles', Caption: 'Роли пользователей' },
  ];
  private ShowUserMenu: BehaviorSubject<boolean> = new BehaviorSubject(false);
  set SetNewShowUserMenu(NewShowUserMenu: boolean) {
    this.ShowUserMenu.next(NewShowUserMenu);
  }
  get GetShowUserMenu(): boolean {
    return this.ShowUserMenu.value;
  }
  get GetApplicationMenu() {
    return this.ApplicationMenu;
  }
}
