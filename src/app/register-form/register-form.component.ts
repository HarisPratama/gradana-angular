import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  readonly url = 'http://localhost:3000'
  res: any

  constructor(private readonly httpClient: HttpClient) { }

  getValue(value: any) {
    this.res = this.httpClient.post(`${this.url}/authentication/register`, value)
  }

}
