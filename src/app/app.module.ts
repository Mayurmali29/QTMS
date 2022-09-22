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

/* Changes start here. */
// Import MSAL and MSAL browser libraries.
import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from "@azure/msal-angular";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";

// Import the Azure AD B2C configuration
import { msalConfig, protectedResources } from "./auth-config";

// Import the Angular HTTP interceptor.
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AdddialogComponent } from "./pages/dialogs/adddialog/adddialog.component";
import { DeletedialogComponent } from "./pages/dialogs/deletedialog/deletedialog.component";

//material
import { MatButtonModule } from "@angular/material/button";
import { TestparametermasterdialogComponent } from "./pages/dialogs/testparametermasterdialog/testparametermasterdialog.component";
import { DashboradComponent } from './pages/dashborad/dashborad.component';

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

    // azure auth
    HttpClientModule,

    MsalModule.forRoot(
      new PublicClientApplication(msalConfig),
      {
        // The routing guard configuration.
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: protectedResources.todoListApi.scopes,
        },
      },
      {
        // MSAL interceptor configuration.
        // The protected resource mapping maps your web API with the corresponding app scopes. If your code needs to call another web API, add the URI mapping here.
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          [
            protectedResources.todoListApi.endpoint,
            protectedResources.todoListApi.scopes,
          ],
        ]),
      }
    ),
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
    DashboradComponent,
  ],
  providers: [
    AppSettings,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: OverlayContainer, useClass: CustomOverlayContainer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
