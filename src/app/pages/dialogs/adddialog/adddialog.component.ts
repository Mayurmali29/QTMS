import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MsalService } from "@azure/msal-angular";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-adddialog",
  templateUrl: "./adddialog.component.html",
  styleUrls: ["./adddialog.component.scss"],
})
export class AdddialogComponent implements OnInit {
  type: string = "";
  loader = false;
  btn = "Save";
  title = "";
  user;
  placeholder = "";
  constructor(
    public dialogRef: MatDialogRef<AdddialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private api: ApiService,
    private auth: MsalService
  ) {
    this.user = `${
      this.auth.instance.getAllAccounts()[0].idTokenClaims.given_name
    } ${this.auth.instance.getAllAccounts()[0].idTokenClaims.family_name}`;
    console.log(this.user);
    this.type = data?.data?.testType ? data.data.testType : "";
    this.placeholder = data.placeholder;
    if (data.title == "FG Family Master" && data.type == "update") {
      this.type = data.data.fgFamilyName;
    }
    if (data.title == "FG Packaging Family" && data.type == "update") {
      this.type = data.data.fgPackagingFamilyName;
    }
    this.btn = this.data.type == "update" ? "Update" : "Save";
    this.title = this.data.title;
  }

  ngOnInit(): void {}
  onConfirm(): void {
    if (this.data.type == "add" && this.data.title == "FG Family Master") {
      console.log(this.type, "family master");
      this.dialogRef.close(true);
    }
    if (this.data.type == "update" && this.data.title == "FG Family Master") {
      console.log(this.type, "family master");
      this.dialogRef.close(true);
    }
    if (
      this.data.title == "FG Packaging Family" &&
      this.data.type == "update"
    ) {
      console.log(this.type, "FG Packaging Family");
      this.dialogRef.close(true);
    }
    if (this.data.title == "FG Packaging Family" && this.data.type == "add") {
      console.log(this.type, "FG Packaging Family");
      this.dialogRef.close(true);
    }

    if (this.data.type == "add" && this.data.title == "Test Type Master") {
      console.log(this.type, "Test Type Master");
      let updateData = {
        TestType: this.type,
        UserName: this.user,
      };
      console.log(updateData);
      this.loader = true;
      this.api.updateTestType(updateData).subscribe({
        next: (res) => {
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
          this.loader = false;
        },
      });
    }
    if (this.data.type == "update" && this.data.title == "Test Type Master") {
      console.log(this.type, "Test Type Master");
      this.dialogRef.close(true);
    }
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
