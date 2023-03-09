import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from '../interfaces/login.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) { }

  login(username: string, password: string) {
    const url_login = `https://dummyjson.com/auth/login`;
    return this._httpClient.post<Login>(
      url_login,
      {
        "username": username,
        "password": password
      }
    );
  }
}
