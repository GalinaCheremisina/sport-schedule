import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: RegisterComponent }
];

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    //exports: [RouterModule]
})
export class RegisterModule {}