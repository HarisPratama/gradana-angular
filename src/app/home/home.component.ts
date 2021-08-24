import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private sub: any;
  balance: any
  transactions: any
  id: any
  url = 'http://localhost:3002/finance'

  constructor(private route: ActivatedRoute, private readonly httpClient: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id
        this.httpClient.get(`${this.url}/${params.id}`).subscribe(
          {
            next: (res: any) => {
              if (res) {
                this.balance = res.data.balance.saldo
                this.transactions = res.data.transactions
              }
            }
          }
        )
      }


    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getValue(value: any) {
    const data = {
      userId: this.id,
      saldo: value.saldo
    }
    console.log(data, "<< data");

    this.httpClient.post(`${this.url}/topup`, data).subscribe(
      {
        next: (res: any) => {
          console.log(res);
        }
      }
    )
  }

}
