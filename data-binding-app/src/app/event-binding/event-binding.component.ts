import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'My Button';
  spinnerMode = 'determinate'; // Atributo acessado pelos colchetes!
  btnEnable = true;
  i = 0;
  selectDisabled = false;
  selectedOption = 1;
  inputName = 'Lusca';
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Click');
    this.i = 0;
  }

  inc() {
    this.i++;
    this.buttonName = 'It was clicked ' + this.i + ' Times ';
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    } , 3000);
  }

  cbChange(event) {
    console.log(event);
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    console.log(event)
    this.selectedOption = event.value;
  }

  inputEvent(event) {
    // console.log(event.target.value);
    this.inputName = event;
    console.log(this.inputName);
  }
}
