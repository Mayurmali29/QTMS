import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";

import { PagesComponent } from "./pages/pages.component";

export const routes: Routes = [
  // { path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },

  {
    path: "",
    component: PagesComponent,
    canActivate: [MsalGuard],
    children: [
      // { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule), data: { breadcrumb: 'Admin' } },
      {
        path: "master",
        canActivate: [MsalGuard],

        loadChildren: () =>
          import("./pages/master/master.module").then((m) => m.MasterModule),
        data: { breadcrumb: "Master" },
      },
    ],
  },

  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then((m) => m.RegisterModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //  preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
      relativeLinkResolution: "legacy",
      // useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
