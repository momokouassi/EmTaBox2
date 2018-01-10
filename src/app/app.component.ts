import { Component, OnInit } from '@angular/core';
import { Box } from './etb.types/etb.mailbox';
import { EtbMailboxManagerService } from './etb.services/etb.mailbox-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'etb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title: string;
  boxRepertory: Box[];
  mailRepertory: Box;

  constructor(
    private mailboxService: EtbMailboxManagerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'EmTaBox';
    if (this.boxRepertory == null || this.boxRepertory.length == 0) {
      this.mailboxService.getBoxRepertory().then(boxRepertory => this.boxRepertory = boxRepertory);
    }
    
    if (this.activatedRoute.snapshot.params['mailRepertoryValue']) {
      let value = this.activatedRoute.snapshot.params['mailRepertoryValue'];
      this.displayMailRepertory(value);
    }
  }

  displayMailRepertory(value: string) {
    this.mailboxService.getMailRepertoryPromise(value).then(data => {
      this.mailRepertory = data;
      this.mailboxService.navigateToMailRepertory(this.boxRepertory, this.mailRepertory);
    });
  }
  
}
