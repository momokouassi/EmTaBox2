import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { etbRouting } from './etb.routing';
import { EtbMailboxManagerService } from './etb.services/etb.mailbox-manager.service';
import { EtbMailRepertoryComponent } from './etb-mail-repertory/etb-mail-repertory.component';
import { EtbMailDetailsComponent } from './etb-mail-details/etb-mail-details.component';
import { EtbSearchBoxComponent } from './etb-search-box/etb-search-box.component';
import { EtbWriteMailComponent } from './etb-write-mail/etb-write-mail.component';


@NgModule({
  declarations: [
    AppComponent,
    EtbMailRepertoryComponent,
    EtbMailDetailsComponent,
    EtbSearchBoxComponent,
    EtbWriteMailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    etbRouting
  ],
  providers: [EtbMailboxManagerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
