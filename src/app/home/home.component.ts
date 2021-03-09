import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public inputValue: string = '';

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit(): void {

  }

  submit() {
    this.cepService.getCep(this.inputValue).subscribe((sucess) => {
      // runs when promise returns success
      console.log(sucess);
    }, (error) => {
      // runs when promise returns an error
      console.error(error);
    })
    console.log('after making request');
  }
}
