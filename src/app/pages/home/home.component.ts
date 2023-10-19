import { Component, OnInit } from '@angular/core';
import { database } from 'src/app/data/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  livros = database

  constructor(){}
  ngOnInit(): void {}
}
