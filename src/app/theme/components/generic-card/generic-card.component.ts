import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent implements OnInit {

  @Input() title    : string              = '';
  @Input() content  : Array<string>       = [];
  @Input() imgName  : string              = '';
  @Input() size     : 'sm' | 'xl'         = 'sm';
  @Input() color    : 'white' | 'orange'  = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
