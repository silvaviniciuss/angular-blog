import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { database } from 'src/app/data/database';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  contentImg: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""
  private id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = database.filter(book => book.id === id)[0]
    this.contentImg = result.img
    this.contentTitle = result.title
    this.contentDescription = result.description

  }
}
