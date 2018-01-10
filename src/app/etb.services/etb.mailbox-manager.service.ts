import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Box, Mail } from './../etb.types/etb.mailbox';
import { BOXREPERTORY } from './../etb.data/etb.boxRepertory';
import { FIELDS } from '../etb.data/etb.fields';

@Injectable()
export class EtbMailboxManagerService {

  private boxRepertory: Box[];
  private mailRepertory: Box;
  private email: Mail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let value = this.activatedRoute.snapshot.params[':mailRepertoryValue'];
    this.getMailRepertory(value);
  }

  getMailFields() {
    return Promise.resolve(FIELDS);
  }

  getBoxRepertory() {
    return Promise.resolve(BOXREPERTORY);
  }
  
  getMailRepertory(value: string) {
    let link = "/"+ value;
    let boxR = BOXREPERTORY;
    
    for (let rep of boxR) {
      if (rep.value == value) {
        this.mailRepertory = rep;
        return this.mailRepertory;
      }
    }
    return null;
  }
  
  getMailRepertoryPromise(value: string) {
    let link = "/"+ value;
    let boxR = BOXREPERTORY;
    
    for (let rep of boxR) {
      if (rep.value == value) {
        this.mailRepertory = rep;
        return Promise.resolve(this.mailRepertory);
      }
    }
    return null;
  }

  navigateToMailRepertory(boxRepertory: Box[], mailRepertory: Box) {
    console.log("Box")
    console.log(boxRepertory);
    let mrLink = '/'+mailRepertory.value;
    this.router.navigate([mrLink]);
  }

  getEmailPromise(mailRepertory: Box, idMail: number) {
    for (let email of mailRepertory.emails) {
      if (email.id == idMail) {
        this.email = email;
        return Promise.resolve(this.email);
      }
    }
  }

  getEmailDetails(mailRepertory: Box, email: Mail, idMail: number) {
    this.router.navigate(['/'+mailRepertory.value, idMail]);
  }

}
