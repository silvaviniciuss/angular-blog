import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  // @Input()
  // bigCardImg: string = ""
  // @Input()
  // bigCardTitle: string = ""
  // @Input()
  // bigCardContent: string = ""
  // @Input()
  // id: string = '0'
  @Input() bigCard: any
  constructor(){}
  ngOnInit(): void {
    
  }
}
