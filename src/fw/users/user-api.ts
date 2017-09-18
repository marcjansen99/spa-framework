import { Observable } from 'rxjs/Observable';

export abstract class UserAPI {
  signIn : (username: string, password: string, rememberMe: boolean) => Observable<any>;
  signOut : () => Observable<any>;
  // changePassword
}
