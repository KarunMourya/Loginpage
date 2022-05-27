import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {BehaviorSubject} from "rxjs";
@Injectable()
export class AuthServiceService {
  jwtHelper = new JwtHelperService();
  tokenInfo : BehaviorSubject<any> = new BehaviorSubject(null);
  showToken(){
    const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const refreshtoken = "dummy";
    localStorage.setItem("access_token",accesstoken);
    localStorage.setItem("refresh_token",refreshtoken);
    const data = {
      access_token : accesstoken,
      refresh_token : refreshtoken
    }
    const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
    console.log(decryptedUser);
    this.tokenInfo.next(data);

  }
}
