import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../Classes/user';
import { UserTheme } from '../Classes/user-theme';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  getSessionData(): User | null {
    if (isPlatformBrowser(this.platformId)) {
      const sessionUser = sessionStorage.getItem('user');
      if (sessionUser) {
        return JSON.parse(sessionUser) as User;
      }
    }
    return null; // Return null if not in the browser or user data isn't found
  }

}
