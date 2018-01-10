import { RouterModule, Routes } from '@angular/router';
import { EtbMailRepertoryComponent } from './etb-mail-repertory/etb-mail-repertory.component';
import { EtbMailDetailsComponent } from './etb-mail-details/etb-mail-details.component';
import { EtbWriteMailComponent } from './etb-write-mail/etb-write-mail.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/RECEPTION', pathMatch: 'full'},
    {path: ':mailRepertoryValue', component: EtbMailRepertoryComponent},
    {path: ':mailRepertoryValue/:idMail', component: EtbMailDetailsComponent}
];

export const etbRouting = RouterModule.forRoot(appRoutes);