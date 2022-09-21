import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MsalService } from "@azure/msal-angular";

@Component({
  selector: "app-user-menu",
  templateUrl: "./user-menu.component.html",
  styleUrls: ["./user-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = "assets/img/users/user.jpg";
  constructor(private authService: MsalService) {}

  ngOnInit() {}
  logout() {
    this.authService.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }
}
