import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent implements OnInit {

  @Input() text       : string = '';
  @Input() textSize   : 'sm' | 'gd' | 'md' = 'sm';
  @Input() btnSize    : 'sm' | 'md' | 'bg' = 'md';
  @Input() background : 'white' | 'orange' = 'white';
  @Input() weight     : 'lg' | 'md' | 'semi' | 'bold' = 'md'
  @Input() disabled   : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
