import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OverlayContainer } from "@angular/cdk/overlay";
import { CustomOverlayContainer } from "./theme/utils/custom-overlay-container";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true,
};

import { SharedModule } from "./shared/shared.module";
import { PipesModule } from "./theme/pipes/pipes.module";
import { AppRoutingModule } from "./app.routing";

import { AppSettings } from "./app.settings";
import { AppComponent } from "./app.component";
import { PagesComponent } from "./pages/pages.component";

import { SidenavComponent } from "./theme/components/sidenav/sidenav.component";
import { VerticalMenuComponent } from "./theme/components/menu/vertical-menu/vertical-menu.component";

import { UserMenuComponent } from "./theme/components/user-menu/user-menu.component";

// firebase
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireAuthGuard } from "@angular/fire/compat/auth-guard";
// import { environment } from "src/environments/environment";
import { AdddialogComponent } from "./pages/dialogs/adddialog/adddialog.component";
import { DeletedialogComponent } from "./pages/dialogs/deletedialog/deletedialog.component";

//material
import { MatButtonModule } from "@angular/material/button";
import { TestparametermasterdialogComponent } from './pages/dialogs/testparametermasterdialog/testparametermasterdialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    SharedModule,
    PipesModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    SidenavComponent,
    VerticalMenuComponent,
    UserMenuComponent,
    AdddialogComponent,
    DeletedialogComponent,
    TestparametermasterdialogComponent,
  ],
  providers: [
    AppSettings,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
