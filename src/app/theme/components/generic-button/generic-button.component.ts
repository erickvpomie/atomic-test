import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent implements OnInit {

  @Input()  text    : string = '';
  @Input() textSize : 'sm' | 'gd' | 'md' = 'sm';

  constructor() { }

  ngOnInit(): void {
  }

}
