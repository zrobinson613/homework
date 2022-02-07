import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  @Input() weatherArray!: any[];

  @Output() cityWasSelected = new EventEmitter<string>();

 

  onSubmit(event: Event,city: string) {
    // prevent default??
    event.preventDefault();
    console.log(city);
    this.cityWasSelected.emit(city);
  }
}
