import { Component, OnInit } from '@angular/core';
import { Mail } from '../etb.types/etb.mailbox';

@Component({
  selector: 'etb-write-mail',
  templateUrl: './etb-write-mail.component.html',
  styleUrls: ['./etb-write-mail.component.css']
})
export class EtbWriteMailComponent implements OnInit {

  newMail: Mail;

  constructor() { }

  ngOnInit() {
    this.razMail();
  }

  razMail() {
    this.newMail.from = "Moïse";
    this.newMail.date = new Date()
  }

}
