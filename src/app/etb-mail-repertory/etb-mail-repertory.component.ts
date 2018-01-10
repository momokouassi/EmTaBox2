import { Component, OnInit, Input } from '@angular/core';
import { Box } from './../etb.types/etb.mailbox';
import { BOXREPERTORY } from './../etb.data/etb.boxRepertory';
import { EtbMailboxManagerService } from './../etb.services/etb.mailbox-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Field } from '../etb.types/etb.field';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'etb-mail-repertory',
  templateUrl: './etb-mail-repertory.component.html',
  styleUrls: ['./etb-mail-repertory.component.css']
})

export class EtbMailRepertoryComponent implements OnInit {

  boxRepertory: Box[] = BOXREPERTORY;
  @Input() mailRepertory: Box;
  fields: Field[];
  emailsQuantity: number;

  constructor(
    private mailboxService: EtbMailboxManagerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mailboxService.getMailFields().then(fields => this.fields = fields);
    let value = this.activatedRoute.snapshot.params['mailRepertoryValue'];
    this.mailRepertory = this.checkMailRepertory(value);
    this.emailsQuantity = this.getMailRepertoryQuantity(this.mailRepertory);
    this.mailboxService.getMailRepertory(value);
  }

  checkMailRepertory(value: string) {
    for (let mailRepertory of this.boxRepertory) {
      if (mailRepertory.value == value) {
        return mailRepertory;
      }
    }
    return null;
  }

  getMailRepertoryQuantity(mailRepertory: Box) {
    return (mailRepertory != null) ? mailRepertory.emails.length : null;
  }

}
