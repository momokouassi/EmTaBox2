import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etb-search-box',
  templateUrl: './etb-search-box.component.html',
  styleUrls: ['./etb-search-box.component.css']
})
export class EtbSearchBoxComponent implements OnInit {

  searchedExpression: string = "";

  constructor() { }

  ngOnInit() {
    this.razChampRecherche();
  }

  razChampRecherche() {
    this.searchedExpression = "";
  }

}
