import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() day;
  @Output() addTemp = new EventEmitter<number>();

  inputForm: FormGroup;

  constructor() {
    this.inputForm = new FormGroup({
      tempInput: new FormControl(""),
    });
  }

  ngOnInit(): void {
  }

  emitAddTemp() {
    this.addTemp.emit(this.inputForm.value.tempInput);
  }

}
