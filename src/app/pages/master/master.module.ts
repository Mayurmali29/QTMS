import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { TesttypemasterComponent } from "./testtypemaster/testtypemaster.component";
import { TestparametermasterComponent } from "./testparametermaster/testparametermaster.component";
import { FgfamilymasterComponent } from "./fgfamilymaster/fgfamilymaster.component";
import { FgpackagingmasterComponent } from "./fgpackagingmaster/fgpackagingmaster.component";
import { FgmasterComponent } from "./fgmaster/fgmaster.component";
import { FgtestparametermasterComponent } from "./fgtestparametermaster/fgtestparametermaster.component";
import { FgtesttransactionComponent } from "./fgtesttransaction/fgtesttransaction.component";
import { MatFormFieldModule } from "@angular/material/form-field";
export const routes: Routes = [
  // { path: '', redirectTo: 'school', pathMatch: 'full'},
  {
    path: "typemaster",
    component: TesttypemasterComponent,
    data: { breadcrumb: "Test Type Master" },
  },
  {
    path: "parametermaster",
    component: TestparametermasterComponent,
    data: { breadcrumb: "Test Parameter Master" },
  },
  {
    path: "familymaster",
    component: FgfamilymasterComponent,
    data: { breadcrumb: "FG Family Master" },
  },
  {
    path: "packagingmaster",
    component: FgpackagingmasterComponent,
    data: { breadcrumb: "FG Packaging Master" },
  },
  {
    path: "fgmaster",
    component: FgmasterComponent,
    data: { breadcrumb: "FG Master" },
  },
  {
    path: "fgtestparametermaster",
    component: FgtestparametermasterComponent,
    data: { breadcrumb: "FG Test Parameter Master" },
  },
  {
    path: "fgtesttransaction",
    component: FgtesttransactionComponent,
    data: { breadcrumb: "FG Test Parameter Master" },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    MatFormFieldModule,
  ],

  declarations: [
    TesttypemasterComponent,
    TestparametermasterComponent,
    FgfamilymasterComponent,
    FgpackagingmasterComponent,
    FgmasterComponent,
    FgtestparametermasterComponent,
    FgtesttransactionComponent,
  ],
})
export class MasterModule {}
