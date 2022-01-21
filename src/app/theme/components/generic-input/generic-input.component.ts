import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {

  @Input() label        : string = '';
  @Input() for          : string = '';
  @Input() lockIcon     : boolean = false;
  @Input() hasError     : boolean = false;
  @Input() errorText    : string = '';
  @Input() placeholder  : string = '';
  @Input() inputValue   : string = '';
  @Input() type         : 'text' | 'number' = 'text';

  @Output () value            : EventEmitter<any> = new EventEmitter<any>();
  @Output () inputValueChange : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleChange( event : any) {
    this.value.emit(event.target.value)
  }

}
