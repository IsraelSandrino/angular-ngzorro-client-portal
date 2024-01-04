import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      name: 'Israel Sandrino',
      email: 'israel.sandrino@wikidados.com.br',
      password: 'Ongame3635@'
    }
  ]

  session: any;

  constructor(private router: Router) {
    let session: any = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    };

    this.session = session;
  }

  login(email: string, password: string, ){
    let user = this.users.find((u) => u.email===email && u.password===password);

    if(user){
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }

  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
