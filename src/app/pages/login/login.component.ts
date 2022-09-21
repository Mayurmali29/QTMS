import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
  Form,
} from "@angular/forms";
import { emailValidator } from "../../theme/utils/app-validators";
import { AppSettings } from "../../app.settings";
import { Settings } from "../../app.settings.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  public form: UntypedFormGroup;
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    public fb: UntypedFormBuilder,
    public router: Router
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, emailValidator])],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      rememberMe: false,
    });
  }

  public onSubmit(f: Form): void {
    if (this.form.valid) {
      const { email, password, r } = this.form.value;

      this.router.navigate(["/"]);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    });
  }
}
