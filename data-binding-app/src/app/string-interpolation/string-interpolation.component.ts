import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {


  firstname = 'John';
  person = {
    firstname: 'john',
    lastname: 'あなたわしんじますか?',
    age: 50,
    address: 'Rota 66'
  };
  constructor() { }

  ngOnInit() {
  }

}
