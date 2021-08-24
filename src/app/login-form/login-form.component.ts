import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  readonly url = 'http://localhost:3000'
  res: any

  constructor(private readonly httpClient: HttpClient, private _router: Router) { }

  getValue(value: any) {
    this.httpClient.post(`${this.url}/authentication/login`, value).subscribe(
      {
        next: res => {
          this.res = res
        },
        error: err => {
          console.log(err);
        }
      }
    )


    if (this.res) this._router.navigate(['home', this.res.id])
  }

}
