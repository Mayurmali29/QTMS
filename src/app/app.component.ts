import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import {
  MsalService,
  MsalBroadcastService,
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
} from "@azure/msal-angular";
import { InteractionStatus, RedirectRequest } from "@azure/msal-browser";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { AppSettings } from "./app.settings";
import { Settings } from "./app.settings.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,

    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private broadcastService: MsalBroadcastService,
    private authService: MsalService
  ) {
    this.settings = this.appSettings.settings;

    // if (this.msalGuardConfig.authRequest) {
    //   this.authService.loginRedirect({
    //     ...this.msalGuardConfig.authRequest,
    //   } as RedirectRequest);
    // } else {
    //   this.authService.loginRedirect();
    // }
  }

  ngOnInit() {
    this.broadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        // this.setLoginDisplay();
        console.log(
          this.authService.instance.getAllAccounts()[0]
        );
      });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
