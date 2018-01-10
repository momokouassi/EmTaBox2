import { Component, OnInit } from '@angular/core';
import { Mail, Box } from '../etb.types/etb.mailbox';
import { EtbMailboxManagerService } from '../etb.services/etb.mailbox-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'etb-mail-details',
  templateUrl: './etb-mail-details.component.html',
  styleUrls: ['./etb-mail-details.component.css']
})
export class EtbMailDetailsComponent implements OnInit {

  mailRepertory: Box;
  email: Mail;

  constructor(
    private mailboxService: EtbMailboxManagerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let mailRepertoryValue = this.activatedRoute.snapshot.params['mailRepertoryValue'];
    let idMail = +this.activatedRoute.snapshot.params['idMail'];
    this.mailboxService.getMailRepertoryPromise(mailRepertoryValue).then((data) => {
      this.mailRepertory = data;
      this.mailboxService.getEmailPromise(this.mailRepertory, idMail).then((email) => {
        this.email = email;
        this.mailboxService.getEmailDetails(this.mailRepertory, this.email, idMail);
      });
    });
  }

}
